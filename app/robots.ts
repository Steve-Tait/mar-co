import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	const baseUrl = new URL("https://mar-co.digital");

	return process.env.NODE_ENV === "production"
		? {
				rules: {
					userAgent: "*",
					allow: "/",
				},
				sitemap: `${baseUrl}sitemap.xml`,
			}
		: {
				rules: {
					userAgent: "*",
					disallow: "/",
				},
			};
}
