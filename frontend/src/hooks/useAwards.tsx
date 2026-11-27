import { awards } from "@/data/Awards";

type AwardsResp = {
	awards: typeof awards;
	total: Number;
};

export const useAwards = (): AwardsResp => {
	return {
		awards: awards,
		total: awards.length,
	};
};
