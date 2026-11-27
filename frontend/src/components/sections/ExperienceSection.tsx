import { Monogram } from "@/components/Monogram.tsx";
import { Section } from "@/components/sections/Section.tsx";
import { Card } from "@/components/ui/card.tsx";
import { useExperiences } from "@/hooks/useExperience.tsx";

export const ExperienceSection = () => {
	const experience: ReturnType<typeof useExperiences> = useExperiences();
	return (
		<Section title="Experience">
			{experience.experience.map((value) => (
				<Card
					key={value.company.name}
					className="card flex-row items-center gap-4 border border-text-primary/10"
				>
					{value.company.name.length > 0 ? (
						<Monogram monogram={value.company.name.charAt(0)} />
					) : null}
					{value.company.name}
				</Card>
			))}
		</Section>
	);
};
