"use server";

import { getLinks } from "@/lib/storyblok";
import type { MetadataRoute } from "next";

function priorityForDepth(realPath: string): number {
	const depth = realPath.split("/").filter(Boolean).length;
	if (depth === 0) return 1;
	if (depth === 1) return 0.8;
	if (depth === 2) return 0.6;
	return 0.4;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const url = "https://mar-co.digital";

	const links = await getLinks();

	if (!links) {
		return [];
	}
	return Object.values(links)
		.filter((link) => !link.is_folder && link.slug !== "config" && link.real_path)
		.map((link) => ({
			url: `${url}${link.real_path}/`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: priorityForDepth(link.real_path as string),
		}));
}
