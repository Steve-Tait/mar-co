'use server';

import { E164Number } from 'libphonenumber-js';
import { subscribeSchema } from './schema';
import { TSubscribeResponse } from './types';

export async function subscribe(
  prevState: any,
  formData: FormData
): Promise<TSubscribeResponse> {
  let response = {} as TSubscribeResponse;

  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const validatedFields = subscribeSchema.safeParse({
      email: formData.get('email'),
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      phone: formData.get('phone'),
      agree: formData.get('agree'),
    });

    //issue with Zod typescript
    if (validatedFields.success === false) {
      throw validatedFields.error.format();
    }

    if (!process.env.BREVO_API_KEY || !process.env.BREVO_LIST_ID)
      throw 'Brevo API Key or List ID not configured properly';

    const fields = validatedFields.data;
    const res = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'api-key': process.env.BREVO_API_KEY,
      },

      body: JSON.stringify({
        updateEnabled: true,
        email: fields.email,
        listIds: [7],
        attributes: {
          FIRSTNAME: fields.firstName,
          LASTNAME: fields.lastName,
          SMS: fields.phone || '',
        },
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw errorData;
    }

    notifyAdmin(fields);
    notifySubscriber(fields);
    response = {
      wasSuccessful: true,
      data: res?.status === 204 ? 'No Content' : await res.json(),
      fields: fields,
    };
  } catch (e) {
    response = {
      wasSuccessful: false,
      error: e,
    };
  }
  return response;
}

const notifyAdmin = async (fields: {
  email: string;
  firstName: string;
  lastName: string;
  agree: boolean;
  phone?: E164Number | undefined;
}) => {
  if (!process.env.BREVO_API_KEY) return;
  return await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': process.env.BREVO_API_KEY,
    },
    body: JSON.stringify({
      sender: { name: 'System Notification', email: 'info@mar-co.digital' },
      to: [{ email: 'info@mar-co.digital', name: 'MAR-CO Digital' }],
      subject: 'New Contact Added to Your List',
      htmlContent: `
        <p>A new contact has been added to your Brevo list:</p>
        <ul>
          <li><b>First Name:</b> ${fields.firstName}</li>
          <li><b>Last Name:</b> ${fields.lastName}</li>
          <li><b>Email:</b> ${fields.email}</li>
          <li><b>Phone:</b> ${fields.phone}</li>
        </ul>
      `,
    }),
  });
};
const notifySubscriber = async (fields: {
  email: string;
  firstName: string;
  lastName: string;
  agree: boolean;
  phone?: E164Number | undefined;
}) => {
  if (!process.env.BREVO_API_KEY) return;
  return await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': process.env.BREVO_API_KEY,
    },
    body: JSON.stringify({
      sender: { name: 'System Notification', email: 'info@mar-co.digital' },
      to: [
        { email: fields.email, name: `${fields.firstName} ${fields.lastName}` },
      ],
      subject: 'Thank you for subscribing',
      htmlContent: `
        <h4>Ciao, ${fields.firstName},</h4>
        <br />
        <p>Thank you for getting in touch with MAR-CO Digital.</p>
        <p>We will contact you within 24 hours to discuss your enquiry.</p>
        <p>In the meantime, check out our latest updates on <a href='https://www.linkedin.com/company/mar-co.digital/'>LinkedIn</a>.</p>
      `,
    }),
  });
};
