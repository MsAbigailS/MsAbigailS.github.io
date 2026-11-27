import { ExperienceCard } from "@/components/experience/ExperienceCard.tsx";
import { Section } from "@/components/sections/Section.tsx";
import { useExperiences } from "@/hooks/useExperience.tsx";

export const ExperienceSection = () => {
	const experiences: ReturnType<typeof useExperiences> = useExperiences();

	return (
		<Section title="Experience" subtitle="career">
			{experiences.experience.map((entry) => (
				<ExperienceCard key={entry.company.name} experience={entry} />
			))}
		</Section>
	);
};
