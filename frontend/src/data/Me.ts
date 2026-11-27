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
	elevator: "ABC DEF",
	location: {
		city: "San Francisco",
		state: "CA",
	},
	keywords: ["CAT", "BAT"],
};
