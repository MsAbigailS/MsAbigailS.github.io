import { awards } from "@/data/Awards.ts";

type AwardsResp = {
	awards: typeof awards;
	total: number;
};

export const useAwards = (): AwardsResp => ({
	awards,
	total: awards.length,
});
