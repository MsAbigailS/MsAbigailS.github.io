import type { Link } from "@/types/Link.ts";

interface Role {
	readonly title: string;
	readonly start: string;
	readonly end: string | null;
	readonly impacts: string[];
}

interface Company {
	readonly name: string;
	readonly link?: Link;
}

export interface Experience {
	readonly company: Company;
	readonly roles: Role[];
}

export const experiences: Experience[] = [
	{
		company: {
			name: "Happyverse",
		},
		roles: [
			{
				title: "Software Contractor",
				start: "Aug 2025",
				end: "Aug 2025",
				impacts: [
					"Lorem ipsum dolor sit amet consectetur adipiscing elit",
					"Sit amet consectetur adipiscing elit quisque faucibus ex",
					"Adipiscing elit quisque faucibus ex sapien vitae pellentesque",
				],
			},
			{
				title: "Founding Engineer",
				start: "Aug 2025",
				end: "Aug 2025",
				impacts: [
					"Consectetur adipiscing elit quisque faucibus ex sapien vitae",
				],
			},
			{
				title: "Head of AI Engineering",
				start: "Aug 2025",
				end: "Jan 2026",
				impacts: ["Ex sapien vitae pellentesque sem placerat in id"],
			},
		],
	},
	{
		company: {
			name: "Stealth Startup",
		},
		roles: [
			{
				title: "Lead Engineer",
				start: "Jan 2026",
				end: null,
				impacts: [
					"Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean",
					"Purus est efficitur laoreet mauris pharetra vestibulum fusce",
					"Nulla molestie mattis scelerisque maximus eget fermentum odio",
				],
			},
		],
	},
];
