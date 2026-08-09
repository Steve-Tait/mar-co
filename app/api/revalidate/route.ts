import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	const secret = req.nextUrl.searchParams.get("secret");

	if (!process.env.REVALIDATE_SECRET || secret !== process.env.REVALIDATE_SECRET) {
		return NextResponse.json({ revalidated: false, message: "Invalid secret" }, { status: 401 });
	}

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
