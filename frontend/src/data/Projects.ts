export interface Project {
	readonly title: string;
	readonly summary: string;
	readonly status: "In progress" | "Completed";
	readonly context: string;
	readonly highlights: string[];
	readonly techstack: string[];
	readonly repositoryUrl: string;
	readonly showcaseUrl?: string;
}

export const projects: Project[] = [
	{
		title: "Job Application Tracker",
		summary:
			"A dashboard for tracking job applications throughout a job search.",
		status: "In progress",
		context: "Personal project",
		highlights: [
			"Add, edit, and remove applications as the search progresses.",
			"Scan applications in a summary table or expand a card for details.",
		],
		techstack: [
			"MongoDB",
			"Vue",
			"Vite",
			"Bootstrap",
			"Express",
			"Axios",
			"Figma",
		],
		repositoryUrl: "https://github.com/MsAbigailS/JobTracker",
	},
	{
		title: "MedMate",
		summary:
			"A mobile health journal for keeping track of prescriptions and conversations with doctors.",
		status: "Completed",
		context: "Axxess Hackathon 2023",
		highlights: [
			"Record consultations and turn them into readable summaries.",
			"Translate care instructions across more than 40 languages.",
		],
		techstack: ["React Native", "Python", "Flask", "GPT"],
		repositoryUrl: "https://github.com/NicholasZolton/AxxessHackathonApp2023",
		showcaseUrl: "https://devpost.com/software/healai-v7o852",
	},
	{
		title: "Redwood",
		summary:
			"A study tool that turns textbooks and research papers into interactive learning trees.",
		status: "Completed",
		context: "HackPrinceton 2023",
		highlights: [
			"Explore linked concepts and mark topics as learned.",
			"Ask an AI tutor questions about the uploaded material.",
		],
		techstack: [
			"Svelte",
			"Node.js",
			"Python",
			"TypeScript",
			"OpenAI",
			"Spacy",
			"FAST API",
		],
		repositoryUrl: "https://github.com/hampster2018/HackPrinceton",
		showcaseUrl: "https://devpost.com/software/redwood",
	},
	{
		title: "The Greenhouse Mission",
		summary:
			"A mobile planner that helps people schedule everyday tasks when their environmental impact is lower.",
		status: "Completed",
		context: "HackRice 2023",
		highlights: [
			"Create plans by voice and review upcoming tasks on a dashboard.",
			"Earn points for meeting personal sustainability goals.",
		],
		techstack: [
			"React Native",
			"Python",
			"Flask",
			"Svelte",
			"JavaScript",
			"Jupyter Notebook",
		],
		repositoryUrl: "https://github.com/hampster2018/HackRice",
		showcaseUrl: "https://devpost.com/software/the-greenhouse-mission",
	},
	{
		title: "Amelia",
		summary:
			"A voice assistant that helps drivers anticipate vehicle maintenance using their driving data.",
		status: "Completed",
		context: "HackUTA 2023",
		highlights: [
			"Estimate when maintenance is due and send personalized SMS reminders.",
			"Call a voice hotline to ask questions about upcoming service.",
		],
		techstack: [
			"GPT",
			"ElevenLabs",
			"Google Voice",
			"Python",
			"React Native",
			"Twilio",
		],
		repositoryUrl: "https://github.com/TimothyNaumov/HackUTA2023-Dashboard",
		showcaseUrl: "https://devpost.com/software/blinkedin-mqo4rp",
	},
	{
		title: "Site-in-Site",
		summary:
			"A real estate map for exploring investment properties and estimating their value.",
		status: "Completed",
		context: "WEHack 2023",
		highlights: [
			"Explore recommended properties on Google Maps.",
			"Enter a property's details to get a valuation from a custom machine learning model.",
		],
		techstack: [
			"Flask",
			"Google Maps API",
			"R",
			"Svelte",
			"TensorFlow",
			"JavaScript",
			"Python",
			"TypeScript",
			"Jupyter Notebook",
		],
		repositoryUrl: "https://github.com/hampster2018/WEHack-2023",
		showcaseUrl: "https://devpost.com/software/site-in-site",
	},
	{
		title: "Dunk Dynasty",
		summary:
			"An interactive basketball game where fans predict plays and compete on a live leaderboard.",
		status: "Completed",
		context: "HackAI",
		highlights: [
			"Generate prediction prompts as the game unfolds.",
			"Track points on the leaderboard and redeem them for rewards.",
		],
		techstack: [
			"AWS",
			"Flask",
			"Python",
			"JavaScript",
			"React",
			"Svelte",
			"TensorFlow",
		],
		repositoryUrl: "https://github.com/MsAbigailS/HackAI",
		showcaseUrl: "https://devpost.com/software/dunk-dynasty",
	},
	{
		title: "Model Maintenance",
		summary:
			"A 3D building dashboard that uses sensor data to flag equipment problems before a breakdown.",
		status: "Completed",
		context: "HackSMU",
		highlights: [
			"Inspect HVAC and elevator diagnostics in a live building model.",
			"Send SMS alerts for urgent faults and track service tasks.",
		],
		techstack: [
			"Three.js",
			"Python",
			"Flask",
			"Machine Learning",
			"Jupyter Notebook",
			"Svelte",
		],
		repositoryUrl: "https://github.com/MsAbigailS/HackSMU",
		showcaseUrl: "https://devpost.com/software/model-maintenance",
	},
];
