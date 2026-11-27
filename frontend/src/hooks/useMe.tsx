import { me } from "@/data/Me.ts";

export const useMe = (): typeof me => ({ ...me });
