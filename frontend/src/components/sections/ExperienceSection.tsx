import { ExperienceCard } from "@/components/experience/ExperienceCard.tsx";
import { Section } from "@/components/sections/Section.tsx";
import { useExperiences } from "@/hooks/useExperience.tsx";

export const ExperienceSection = () => {
	const experiences: ReturnType<typeof useExperiences> = useExperiences();

	return (
		<Section title="Experience" subtitle="career" animateOpacity={false}>
			{experiences.experience.map((entry) => (
				<Section key={entry.company.name}>
					<ExperienceCard experience={entry} />
				</Section>
			))}
		</Section>
	);
};
