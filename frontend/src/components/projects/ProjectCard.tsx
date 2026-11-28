import { ArrowUpRight, CircleCheck, Eye, SquareTerminal } from "lucide-react";
import type { Project } from "@/data/Projects.ts";

export const ProjectCard = (props: { project: Project }) => (
	<article
		key={props.project.title}
		className="flex min-w-0 flex-col gap-6 rounded-2xl border border-text-primary/10 bg-background-secondary p-card-inset text-text-primary"
	>
		<header className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
			<span className="inline-flex items-center gap-2 rounded-full bg-tertiary px-3 py-1 font-serif text-sm font-medium text-accent">
				<span aria-hidden="true" className="size-2 rounded-full bg-current" />
				{props.project.status}
			</span>
			<span className="font-mono text-xs text-text-primary/80">
				{props.project.context}
			</span>
		</header>

		<div>
			<h3 className="title text-3xl">
				<a
					href={props.project.showcaseUrl ?? props.project.repositoryUrl}
					className="group flex items-baseline justify-between gap-4 hover:text-accent"
				>
					{props.project.title}
					<ArrowUpRight
						aria-hidden="true"
						className="size-6 shrink-0 self-center text-text-primary/80 group-hover:text-accent"
					/>
				</a>
			</h3>
			<p className="mt-2 text-base leading-relaxed text-text-primary/85">
				{props.project.summary}
			</p>
		</div>

		<ul className="space-y-2 text-base leading-relaxed text-text-primary/85">
			{props.project.highlights.map((highlight) => (
				<li key={highlight} className="flex items-start gap-3">
					<CircleCheck
						aria-hidden="true"
						className="mt-1 size-4 shrink-0 text-accent"
					/>
					{highlight}
				</li>
			))}
		</ul>

		<ul
			aria-label="Technologies"
			className="mt-auto flex flex-wrap gap-2 border-t border-text-primary/10 pt-5"
		>
			{props.project.techstack.map((technology) => (
				<li
					key={technology}
					className="rounded bg-text-primary/[0.07] px-2.5 py-0.5 font-serif text-sm text-text-primary/85"
				>
					{technology}
				</li>
			))}
		</ul>

		<footer className="flex items-center justify-between gap-4">
			<a
				href={props.project.showcaseUrl ?? props.project.repositoryUrl}
				className="inline-flex items-center gap-2 font-serif font-semibold text-accent hover:underline"
			>
				{props.project.showcaseUrl ? "View on Devpost" : "View on GitHub"}
				<Eye aria-hidden="true" className="size-4" />
			</a>
			{props.project.showcaseUrl !== undefined && (
				<a
					href={props.project.repositoryUrl}
					aria-label={`View source code for ${props.project.title} on GitHub`}
					className="inline-flex size-9 items-center justify-center rounded text-text-primary/80 hover:text-accent"
				>
					<SquareTerminal aria-hidden="true" className="size-5" />
				</a>
			)}
		</footer>
	</article>
);
