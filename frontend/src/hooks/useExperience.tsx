import { experiences } from "@/data/Experience.ts";

type ExperienceResp = {
	experience: typeof experiences;
	total: number;
};

export const useExperiences = (): ExperienceResp => ({
	experience: experiences,
	total: experiences.length,
});
