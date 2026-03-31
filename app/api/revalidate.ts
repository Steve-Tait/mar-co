// app/api/revalidate/route.ts
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	const rawBody = await req.text();

	const body = JSON.parse(rawBody);

	// Adapt this to your Storyblok slug structure
	const slug = body?.story?.full_slug || body?.full_slug || "";

	// Homepage
	if (!slug || slug === "home") {
		revalidatePath("/");
	}

	// Revalidate the matching page
	if (slug) {
		revalidatePath(`/${slug}`);
	}

	return NextResponse.json({ revalidated: true, slug });
}
