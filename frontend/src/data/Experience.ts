import { type Link } from "@/types/Link";

type Role = {
	title: string;
	start: string;
	end: string | null;
};

type Company = {
	name: string;
	link?: Link;
};

type Experience = {
	company: Company;
	roles: Role[];
};

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
			},
			{
				title: "Founding Engineer",
				start: "Aug 2025",
				end: "Aug 2025",
			},
			{
				title: "Head of AI Engineering",
				start: "Aug 2025",
				end: "Jan 2026",
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
			},
		],
	},
];
