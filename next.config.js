/** @type {import('next').NextConfig} */
const nextConfig = {
	// Uncomment the line below if you want to export as a fully static site
	// output: 'export',

	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "a.storyblok.com",
				port: "",
			},
		],
	},
};

module.exports = nextConfig;
