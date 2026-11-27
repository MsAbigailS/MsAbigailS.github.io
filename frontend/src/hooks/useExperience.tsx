import { experiences } from "@/data/Experience";

type ExperienceResp = {
	experience: typeof experiences;
	total: Number;
};

export const useExperiences = (): ExperienceResp => {
	return {
		experience: experiences,
		total: experiences.length,
	};
};
