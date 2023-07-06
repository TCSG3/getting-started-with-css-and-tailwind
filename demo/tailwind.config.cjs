/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			backgroundColor: {
				accent: "rgba(124, 58, 237, 12%)",
			},
			backgroundImage: {
				"accent-gradient":
					"linear-gradient(45deg, rgb(124, 58, 237), #da62c4 30%, white 60%)",
			},
			backgroundSize: {
				"4x": "400%",
			},
			borderColor: {
				accent: "rgba(124, 58, 237, 25%)",
			},
			colors: {
				accent: "rgb(124, 58, 237)",
			},
			gridTemplateColumns: {
				fit: "repeat(auto-fit, minmax(24ch, 1fr))",
			},
			height: {
				banner: "calc(100vh - 48px)",
			},
			transitionTimingFunction: {
				custom: "cubic-bezier(0.22, 1, 0.36, 1)",
			},
		},
	},
	plugins: [],
};
