import { me } from "@/data/Me";

export const useMe = (): typeof me => {
	return { ...me };
};
