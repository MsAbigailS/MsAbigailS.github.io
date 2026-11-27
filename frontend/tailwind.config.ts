import type { Config } from "tailwindcss";

export default {
	theme: {
		extend: {
			colors: {
				accent: "#B3C7EF",
				tertiary: "#404756",
				background: {
					primary: "#121316",
					secondary: "#000000",
				},
				text: {
					primary: "#E3E2E5",
				},
			},
			spacing: {
				gutter: "clamp(1rem, 5.625vw, 5.25rem)",
				section: "clamp(4rem, 8.3vw, 7.75rem)",
				"card-inset": "clamp(1.5rem, 3.85vw, 3.625rem)",
			},
			maxWidth: {
				content: "82.5rem",
				reading: "65ch",
			},
			fontFamily: {
				inter: ['"Inter Variable"', "sans-serif"],
				mono: ['"JetBrains Mono Variable"', "ui-monospace", "monospace"],
				serif: ['"Newsreader Variable"', "Georgia", "serif"],
			},
			fontSize: {
				body: ["1rem", { lineHeight: "1.5" }],
				heading: ["clamp(1.5rem, 1rem + 2vw, 2.5rem)", { lineHeight: "1.2" }],
				display: ["clamp(2.5rem, 4.15vw, 3.875rem)", { lineHeight: "1.05" }],
			},
		},
	},
} satisfies Config;
