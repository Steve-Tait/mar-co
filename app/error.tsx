"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className="flex min-h-svh flex-col items-center justify-center gap-y-10 px-4 py-10 text-center sm:py-20">
			<div className="flex flex-col gap-y-4">
				<h1 className="font-heading text-3xl font-bold sm:text-4xl">Something went wrong</h1>
				<p className="text-lg">Sorry about that — please try again.</p>
			</div>
			<div className="flex flex-wrap items-center justify-center gap-4">
				<button className="btn btn--primary" onClick={reset}>
					Try again
				</button>
				<Link className="btn btn--secondary" href="/">
					Back to home
				</Link>
			</div>
		</div>
	);
}
