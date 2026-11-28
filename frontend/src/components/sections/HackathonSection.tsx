import { Section } from "@/components/sections/Section.tsx";
import { useAwards } from "@/hooks/useAwards.tsx";
import { useProjects } from "@/hooks/useProjects.tsx";

export const HackathonSection = () => {
	const { awards, total } = useAwards();
	const projects = useProjects();

	return (
		<Section
			title={`${total} Hackathon Awards`}
			subtitle="Recognition"
			animateOpacity={false}
		>
			<ul className="grid auto-rows-fr grid-cols-1 gap-5 sm:has-[>li:nth-child(2)]:grid-cols-2 xl:gap-7">
				{awards.map((award) => {
					const project = projects.find(
						(entry) => entry.title === award.project,
					);

					return (
						<li
							key={`${award.hackathon}-${award.name}`}
							className="flex min-w-0 flex-col rounded-2xl bg-background-secondary p-6 last:odd:col-span-full xl:p-7"
						>
							<div className="flex items-start justify-between gap-3 font-serif text-sm font-medium leading-tight">
								<span className="rounded-2xl bg-tertiary px-3 py-1 text-accent">
									{award.name}
								</span>
								<span className="pt-1 text-right text-text-primary/85">
									{award.hackathon}
								</span>
							</div>
							<h3 className="title mt-4 text-2xl leading-tight">
								{award.project}
							</h3>
							{project && (
								<>
									<p className="mt-2 text-base leading-relaxed text-text-primary/85">
										{project.summary}
									</p>
									<ul
										aria-label="Technologies"
										className="mt-auto flex flex-wrap gap-1.5 pt-5"
									>
										{project.techstack.slice(0, 2).map((technology) => (
											<li
												key={technology}
												className="rounded bg-text-primary/[0.07] px-2 py-0.5 font-serif text-sm font-medium text-text-primary/85"
											>
												{technology}
											</li>
										))}
									</ul>
								</>
							)}
						</li>
					);
				})}
			</ul>
		</Section>
	);
};
