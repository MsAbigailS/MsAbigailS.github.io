import { ProjectCard } from "@/components/projects/ProjectCard.tsx";
import { Section } from "@/components/sections/Section.tsx";
import { useProjects } from "@/hooks/useProjects.tsx";

export const ProjectsSection = () => {
	const projects = useProjects();

	return (
		<Section
			title="Selected Engineering Projects"
			subtitle="Featured Projects"
			animateOpacity={false}
		>
			<div className="grid gap-6 lg:grid-cols-2">
				{projects.map((project) => (
					<ProjectCard key={project.title} project={project} />
				))}
			</div>
		</Section>
	);
};
