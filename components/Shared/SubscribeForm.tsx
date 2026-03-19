"use client";

import React, { useActionState } from "react";
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
];

const SubscribeForm = ({ children }: { children?: React.ReactNode }) => {
	const ref = React.useRef<HTMLFormElement>(null);
	const [state, formAction] = useActionState(subscribe, null);
	if (state?.wasSuccessful) {
		ref?.current?.reset();
		const email = state?.fields?.email;
		return (
			<div className="flex flex-col gap-y-4 text-center">
				<Heading level={3} heading={`Thank you${email ? `, ${email}` : null}`} />
				<p className="text-lg">Check your inbox for our first email.</p>
			</div>
		);
	} else if (state?.error) {
		console.error("error", state.error);
	}

	return (
		<form className="flex w-full gap-x-4" ref={ref} action={formAction}>
			<div className="grow">
				{formFields.map(({ type, name, placeholder }, index) => (
					<React.Fragment key={index}>
						<input
							id={"subscribe-" + name}
							type={type}
							name={name}
							placeholder={placeholder}
							autoComplete="email"
							className="outline-solid outline-3 w-full min-w-0 rounded-xl border-2 border-accent bg-background px-4 py-3 outline outline-transparent transition-all duration-300 hover:outline-accent focus:outline-accent"
						/>
						{state?.error?.[name]?._errors.map((e: string, i: number) => (
							<p className="mt-1 text-xs/none text-destructive-foreground" key={i}>
								{e}
							</p>
						))}
					</React.Fragment>
				))}
			</div>
			<SubmitButton>Submit</SubmitButton>
		</form>
	);
};
export default SubscribeForm;
