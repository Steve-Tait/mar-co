"use client";

import React, { useActionState, useEffect } from "react";
import { SubmitButton } from "./SubmitButton";
import { subscribe } from "@/lib/actions";
import Heading from "./Heading";

type FormField = {
	type?: string;
	name: string;
	placeholder?: string;
	isWide?: boolean;
	label?: string;
};

const formFields: FormField[] = [
	{
		name: "email",
		type: "email",
		placeholder: "someone@email.com",
	},
	{
		name: "company",
		type: "honeypot",
		placeholder: "company",
	},
];

const SubscribeForm = ({ children }: { children?: React.ReactNode }) => {
	const ref = React.useRef<HTMLFormElement>(null);
	const [state, formAction] = useActionState(subscribe, null);

	useEffect(() => {
		if (state?.wasSuccessful) {
			ref.current?.reset();
		}
	}, [state?.wasSuccessful]);

	if (state?.wasSuccessful) {
		const email = state?.fields?.email;
		return (
			<div className="flex flex-col gap-y-4 text-center">
				<Heading level={3} heading={`Thank you${email ? `, ${email}` : null}`} />
				<p className="text-lg">Check your inbox for our first email.</p>
			</div>
		);
	}

	return (
		<form className="flex w-full flex-col gap-y-2" ref={ref} action={formAction}>
			{state?.error && <p className="text-sm text-destructive-foreground">{state.error}</p>}
			<div className="flex w-full gap-x-4">
				<div className="grow">
					{formFields.map(({ type, name, placeholder }, index) => (
						<React.Fragment key={index}>
							{type === "honeypot" ? (
								<input className="field-company" type="text" name={name} placeholder={placeholder} />
							) : (
								<input
									id={"subscribe-" + name}
									type={type}
									name={name}
									placeholder={placeholder}
									autoComplete="email"
									defaultValue={state?.wasSuccessful === false ? state.submittedValues?.[name] : undefined}
									className="outline-solid outline-3 w-full min-w-0 rounded-xl border-2 border-accent bg-background px-4 py-3 outline outline-transparent transition-all duration-300 hover:outline-accent focus:outline-accent"
								/>
							)}
							{state?.fieldErrors?.[name]?._errors.map((e: string, i: number) => (
								<p className="mt-1 text-xs/none text-destructive-foreground" key={i}>
									{e}
								</p>
							))}
						</React.Fragment>
					))}
				</div>
				<SubmitButton>Submit</SubmitButton>
			</div>
		</form>
	);
};
export default SubscribeForm;
