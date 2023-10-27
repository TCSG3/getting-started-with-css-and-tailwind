/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.astro"],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-sky": "var(--gradient-sky)",
				"gradient-background-building-2":
					"repeating-linear-gradient(var(--building-color2), var(--building-color2) 6%, var(--window-color2) 6%, var(--window-color2) 9%)",
				"gradient-background-building-3":
					"repeating-linear-gradient(90deg, var(--building-color3), var(--building-color3), var(--window-color3) 15%)",
				"gradient-foreground-building-1":
					"repeating-linear-gradient(90deg, var(--building-color4), var(--building-color4) 10%, transparent 10%, transparent 15% ), repeating-linear-gradient(var(--building-color4), var(--building-color4) 10%, var(--window-color4) 10%, var(--window-color4) 90%)",
				"gradient-foreground-building-5":
					"repeating-linear-gradient(var(--building-color2), var(--building-color2) 5%, transparent 5%, transparent 10%), repeating-linear-gradient(90deg, var(--building-color2), var(--building-color2) 12%, var(--window-color2) 12%, var(--window-color2) 44% )",
				"gradient-foreground-building-6":
					"repeating-linear-gradient(90deg, var(--building-color3), var(--building-color3) 10%, transparent 10%, transparent 30%), repeating-linear-gradient(var(--building-color3), var(--building-color3) 10%, var(--window-color3) 10%, var(--window-color3) 30% )",
			},
			colors: {
				building: {
					1: "var(--building-color1)",
					2: "var(--building-color2)",
					3: "var(--building-color3)",
					4: "var(--building-color4)",
				},
				window: {
					1: "var(--window-color1)",
					2: "var(--window-color2)",
					3: "var(--window-color3)",
					4: "var(--window-color4)",
				},
			},
		},
	},
	plugins: [],
};
