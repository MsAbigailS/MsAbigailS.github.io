import { awards } from "@/data/Awards";

export const useAwards = (): typeof awards => {
	return {
		...awards,
	};
};
