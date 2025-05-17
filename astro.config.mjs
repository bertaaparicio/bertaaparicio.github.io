// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// disable image optimization in dev mode to allow the project to work on StackBlitz
const enableImageOptimization = process.env.NODE_ENV === "development";

// https://astro.build/config
export default defineConfig({
	trailingSlash: "never",
	site: "https://example.com",
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [mdx(), icon(), sitemap()],
	image: {
		service: enableImageOptimization
			? import("@astrojs/image/sharp").then((mod) => mod.default())
			: passthroughImageService(),
	},
});
