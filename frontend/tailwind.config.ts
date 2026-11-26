import type { Config } from "tailwindcss";

export default {
	theme: {
		extend: {
			colors: {
				background: {
					default: "#000000",
				},
			},
			spacing: {
				gutter: "clamp(1rem, 4vw, 3rem)",
				section: "clamp(3rem, 8vw, 6rem)",
			},
			maxWidth: {
				content: "72rem",
				reading: "65ch",
			},
			fontSize: {
				body: ["1rem", { lineHeight: "1.5" }],
				heading: ["clamp(1.5rem, 1rem + 2vw, 2.5rem)", { lineHeight: "1.2" }],
				display: [
					"clamp(2.25rem, 1.5rem + 4vw, 4.5rem)",
					{ lineHeight: "1.1" },
				],
			},
		},
	},
} satisfies Config;
