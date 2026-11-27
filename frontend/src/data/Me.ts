interface Me {
	readonly name: string;
	readonly title: string;
	readonly tag: string;
	readonly elevator: string;
	readonly location: {
		readonly city: string;
		readonly state: string;
	};
	readonly keywords: string[];
}

export const me: Me = {
	name: "Abigail Smith",
	title: "Fullstack Engineer",
	tag: "Open to collaborating",
	elevator:
		"Shipping fast, resilient products from zero to one at early-stage startups. Obsessed with clean architecture, sub-50ms interactions, and developer tooling.",
	location: {
		city: "San Francisco",
		state: "CA",
	},
	keywords: ["CAT", "BAT"],
};
