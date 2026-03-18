export const dynamic = "force-static";

import { StoryblokStory } from "@storyblok/react/rsc";
import { createMetaData, fetchData, getLinks } from "@/lib/storyblok";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";
import { MetaProps } from "@/lib/types";
import { resolveRelations } from "@/lib/consts";

export async function generateStaticParams() {
	// Only generate static params in production
	if (process.env.NODE_ENV !== "production") {
		return [{ slug: [] }]; // Just generate home page for development
	}

	const links = await getLinks();
	if (!links) return [{ slug: [] }]; // At least generate home page

	const staticParams = Object.values(links)
		.filter((link: any) => {
			// Exclude config and folder pages, but include all other pages
			return link.is_folder === false && link.slug !== "config";
		})
		.map((link: any) => ({
			slug: link.slug === "/" || link.slug === "home" ? [] : link.slug.split("/").filter(Boolean),
		}));

	// Ensure home page is included
	const hasHomePage = staticParams.some((param) => param.slug.length === 0);
	if (!hasHomePage) {
		staticParams.unshift({ slug: [] });
	}

	return staticParams;
}

export async function generateMetadata(props: MetaProps, parent: ResolvingMetadata): Promise<Metadata> {
	const params = await props.params;
	return createMetaData(params);
}

export default async function Page(props: MetaProps) {
	const params = await props.params;
	const story = await fetchData(params);
	if (!story?.content) {
		notFound();
	}
	return <StoryblokStory story={story} id={story.id} uuid={story.uuid} first_published_at={story.first_published_at} bridgeOptions={{ resolveRelations }} />;
}
