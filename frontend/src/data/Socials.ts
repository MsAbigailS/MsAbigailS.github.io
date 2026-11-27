import {
	BriefcaseBusiness,
	Copy,
	GitFork,
	type LucideIcon,
} from "lucide-react";
import type { ButtonVariant } from "@/components/Button.tsx";
import type { Link } from "@/types/Link.ts";

interface Social {
	readonly name: string;
	readonly link: Link;
	readonly icon: LucideIcon;
	readonly variant?: ButtonVariant;
}

export const socials: Social[] = [
	{
		name: "GitHub",
		icon: GitFork,
		variant: "accent",
		link: {
			url: "ABC",
			anchor: "GitHub",
		},
	},
	{
		name: "LinkedIn",
		icon: BriefcaseBusiness,
		link: {
			url: "ABC",
			anchor: "LinkedIn",
		},
	},
	{
		name: "Copy Email",
		icon: Copy,
		link: {
			url: "ABC",
			anchor: "Copy Email",
		},
	},
];
