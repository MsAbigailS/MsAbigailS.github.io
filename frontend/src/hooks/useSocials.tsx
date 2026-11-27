import { socials } from "@/data/Socials";

type SocialsResp = {
	socials: typeof socials;
	total: Number;
};

export const useSocials = (): SocialsResp => {
	return {
		socials: socials,
		total: socials.length,
	};
};
