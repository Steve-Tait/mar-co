"use server";

import { z } from "zod";
import { E164Number } from "libphonenumber-js";
import { contactSchema, subscribeSchema } from "./schema";
import { TFieldErrors, TSubscribeResponse } from "./types";

type ContactFields = z.infer<typeof contactSchema>;
type SubscribeFields = z.infer<typeof subscribeSchema>;

const GENERIC_ERROR = "Something went wrong. Please try again.";
const THANK_YOU_MESSAGE =
	"<p>Thank you for getting in touch with MAR-CO Digital.</p><p>We will contact you within 24 hours to discuss your enquiry.</p><p>In the meantime, check out our latest updates on <a href='https://www.linkedin.com/company/mar-co.digital/'>LinkedIn</a>.</p>";

// React resets uncontrolled form fields after every action submission, success or
// failure, since it has no notion of app-level success. Echoing back what was
// submitted as `defaultValue`/`defaultChecked` is what keeps the fields populated
// when validation (or the Brevo request) fails.
function formDataToStrings(formData: FormData, keys: string[]): Record<string, string> {
	const result: Record<string, string> = {};
	for (const key of keys) {
		const value = formData.get(key);
		if (typeof value === "string") result[key] = value;
	}
	return result;
}

async function submitToBrevo<TFields extends { email: string }>(
	fields: TFields,
	listId: number,
	submittedValues: Record<string, string>,
	attributes?: Record<string, unknown>,
): Promise<TSubscribeResponse<TFields>> {
	if (!process.env.BREVO_API_KEY) {
		console.error("Brevo API key is not configured");
		return { wasSuccessful: false, error: GENERIC_ERROR, submittedValues };
	}
	if (!listId || Number.isNaN(listId)) {
		console.error("Brevo list ID is invalid");
		return { wasSuccessful: false, error: GENERIC_ERROR, submittedValues };
	}

	try {
		const res = await fetchWithRetry("https://api.brevo.com/v3/contacts", {
			method: "POST",
			headers: {
				accept: "application/json",
				"content-type": "application/json",
				"api-key": process.env.BREVO_API_KEY,
				"user-agent": "mar-co/subscribe (vercel)",
			},
			body: JSON.stringify({
				updateEnabled: true,
				email: fields.email,
				listIds: [listId],
				...(attributes ? { attributes } : {}),
			}),
		});

		if (!res.ok) {
			const errorData = await res.json().catch(() => null);
			console.error("Brevo request failed", errorData);
			return { wasSuccessful: false, error: GENERIC_ERROR, submittedValues };
		}

		notifyAdmin(fields);
		notifySubscriber(fields, THANK_YOU_MESSAGE);

		return {
			wasSuccessful: true,
			data: res.status === 204 ? "No Content" : await res.json(),
			fields,
		};
	} catch (err) {
		console.error("Brevo submission failed", err);
		return { wasSuccessful: false, error: GENERIC_ERROR, submittedValues };
	}
}

export async function contactUs(prevState: unknown, formData: FormData): Promise<TSubscribeResponse<ContactFields>> {
	const submittedValues = formDataToStrings(formData, ["firstName", "lastName", "email", "phone", "agree"]);

	const validatedFields = contactSchema.safeParse({
		email: formData.get("email"),
		firstName: formData.get("firstName"),
		lastName: formData.get("lastName"),
		phone: formData.get("phone"),
		agree: formData.get("agree"),
	});

	if (!validatedFields.success) {
		return {
			wasSuccessful: false,
			error: "Please correct the errors below.",
			fieldErrors: validatedFields.error.format() as unknown as TFieldErrors,
			submittedValues,
		};
	}

	if (!process.env.BREVO_LIST_ID) {
		console.error("Brevo list ID is not configured");
		return { wasSuccessful: false, error: GENERIC_ERROR, submittedValues };
	}

	const { firstName, lastName, phone } = validatedFields.data;
	return submitToBrevo(validatedFields.data, Number(process.env.BREVO_LIST_ID), submittedValues, {
		FIRSTNAME: firstName,
		LASTNAME: lastName,
		SMS: phone || "",
	});
}

export async function subscribe(prevState: unknown, formData: FormData): Promise<TSubscribeResponse<SubscribeFields>> {
	const submittedValues = formDataToStrings(formData, ["email"]);

	const honeypot = formData.get("company"); // honeypot field to prevent bots
	if (honeypot) {
		return { wasSuccessful: false, error: GENERIC_ERROR, submittedValues };
	}

	const validatedFields = subscribeSchema.safeParse({
		email: formData.get("email"),
	});

	if (!validatedFields.success) {
		return {
			wasSuccessful: false,
			error: "Please correct the errors below.",
			fieldErrors: validatedFields.error.format() as unknown as TFieldErrors,
			submittedValues,
		};
	}

	return submitToBrevo(validatedFields.data, 12, submittedValues);
}
const RETRYABLE_CODES = new Set(["UND_ERR_SOCKET", "ECONNRESET", "ETIMEDOUT", "ENETUNREACH", "EAI_AGAIN"]);

function isRetryableError(err: unknown): boolean {
	const cause = err instanceof Error ? (err.cause as { code?: string } | undefined) : undefined;
	const code = cause?.code || (err instanceof Error && "code" in err ? (err as { code?: string }).code : undefined);
	const isAbort = err instanceof Error && err.name === "AbortError";
	return (!!code && RETRYABLE_CODES.has(code)) || isAbort;
}

async function fetchWithRetry(url: string, init: RequestInit, opts: { retries?: number; timeoutMs?: number } = {}) {
	const retries = opts.retries ?? 3;
	const timeoutMs = opts.timeoutMs ?? 10000;
	let lastError: unknown = null;
	for (let attempt = 1; attempt <= retries; attempt++) {
		const controller = new AbortController();
		const timer = setTimeout(() => controller.abort(), timeoutMs);
		try {
			const res = await fetch(url, {
				...init,
				signal: controller.signal,
				cache: "no-store",
			});
			clearTimeout(timer);
			return res;
		} catch (err) {
			clearTimeout(timer);
			lastError = err;
			if (attempt < retries && isRetryableError(err)) {
				// simple backoff
				await new Promise((r) => setTimeout(r, 400 * attempt));
				continue;
			}
			throw err;
		}
	}
	throw lastError;
}

const HTML_ESCAPES: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
function escapeHtml(value: string): string {
	return value.replace(/[&<>"']/g, (char) => HTML_ESCAPES[char]);
}

const notifyAdmin = async (fields: { email: string; firstName?: string; lastName?: string; agree?: boolean; phone?: E164Number | undefined }) => {
	if (!process.env.BREVO_API_KEY) return;
	return await fetchWithRetry("https://api.brevo.com/v3/smtp/email", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"api-key": process.env.BREVO_API_KEY,
			"user-agent": "mar-co/subscribe (vercel)",
		},
		body: JSON.stringify({
			sender: { name: "System Notification", email: "info@mar-co.digital" },
			to: [{ email: "info@mar-co.digital", name: "MAR-CO Digital" }],
			subject: "New Contact Added to Your List",
			htmlContent: `
        <p>A new contact has been added to your Brevo list:</p>
        <ul>
          ${fields.firstName ? `<li><b>First Name:</b> ${escapeHtml(fields.firstName)}</li>` : ""}
          ${fields.lastName ? `<li><b>Last Name:</b> ${escapeHtml(fields.lastName)}</li>` : ""}
          <li><b>Email:</b> ${escapeHtml(fields.email)}</li>
          ${fields.phone ? `<li><b>Phone:</b> ${escapeHtml(fields.phone)}</li>` : ""}
        </ul>
      `,
		}),
	});
};
const notifySubscriber = async (
	fields: { email: string; firstName?: string; lastName?: string; agree?: boolean; phone?: E164Number | undefined },
	message: string,
) => {
	if (!process.env.BREVO_API_KEY) return;
	return await fetchWithRetry("https://api.brevo.com/v3/smtp/email", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"api-key": process.env.BREVO_API_KEY,
			"user-agent": "mar-co/subscribe (vercel)",
		},
		body: JSON.stringify({
			sender: { name: "System Notification", email: "info@mar-co.digital" },
			to: [{ email: fields.email, name: fields.firstName ? `${fields.firstName} ${fields.lastName || ""}` : undefined }],
			subject: "Thank you for subscribing",
			htmlContent: `
        <h4>${fields.firstName ? `Ciao ${escapeHtml(fields.firstName)},` : "Ciao!"}</h4>
        <br />
        ${message}
      `,
		}),
	});
};
