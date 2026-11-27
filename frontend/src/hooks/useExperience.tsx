import { useMemo } from "react";
import { type Experience, experiences } from "@/data/Experience.ts";
import { monthIndex } from "@/lib/monthIndex.ts";

interface ExperienceResp {
	readonly experience: typeof experiences;
	readonly total: number;
}

const endMonth = (role: Experience["roles"][number] | undefined): number => {
	if (role === undefined) {
		return Number.NEGATIVE_INFINITY;
	}
	return role.end === null ? Number.POSITIVE_INFINITY : monthIndex(role.end);
};

export const useExperiences = (): ExperienceResp => {
	const sorted: typeof experiences = useMemo(
		() =>
			experiences
				.map((entry) => ({
					...entry,
					roles: entry.roles.toSorted((a, b) =>
						a.end === b.end
							? monthIndex(b.start) - monthIndex(a.start)
							: endMonth(b) - endMonth(a),
					),
				}))
				.sort((a, b) => endMonth(b.roles[0]) - endMonth(a.roles[0])),
		[],
	);

	return {
		experience: sorted,
		total: experiences.length,
	};
};
