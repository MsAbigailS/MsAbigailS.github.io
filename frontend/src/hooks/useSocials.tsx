import { socials } from "@/data/Socials.ts";

type SocialsResp = {
	socials: typeof socials;
	total: number;
};

export const useSocials = (): SocialsResp => ({
	socials,
	total: socials.length,
});
