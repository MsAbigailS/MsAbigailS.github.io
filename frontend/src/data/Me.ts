type Me = {
	name: string;
	title: string;
	elevator: string;
	location: {
		city: string;
		state: string;
	};
	keywords: string[];
};

export const me: Me = {
	name: "Abigail Smith",
	title: "Fullstack Engineer",
	elevator:
		"Shipping fast, resilient products from zero to one at early-stage startups. Obsessed with clean architecture, sub-50ms interactions, and developer tooling.",
	location: {
		city: "San Francisco",
		state: "CA",
	},
	keywords: ["CAT", "BAT"],
};
