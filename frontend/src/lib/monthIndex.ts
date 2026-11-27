const months = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

export const monthsPerYear = months.length;

export const monthIndex = (date: string) => {
	const [month, year] = date.split(" ");
	return Number(year) * monthsPerYear + months.indexOf(month ?? "");
};
