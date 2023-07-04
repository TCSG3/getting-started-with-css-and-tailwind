import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	//? We'll start without Tailwind for the intro topics
	// integrations: [],
	integrations: [tailwind()],
});
