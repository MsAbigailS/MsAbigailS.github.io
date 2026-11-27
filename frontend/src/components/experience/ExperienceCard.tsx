import { Card } from "@/components/Card.tsx";
import { Monogram } from "@/components/Monogram.tsx";
import { Tag } from "@/components/Tag.tsx";
import type { Experience } from "@/data/Experience.ts";
import { monthIndex, monthsPerYear } from "@/lib/monthIndex.ts";

interface ExperienceCardProps {
	readonly experience: Experience;
}

const tenure = (start: string, end: string | null) => {
	const now = new Date();
	const lastMonth =
		end === null
			? now.getFullYear() * monthsPerYear + now.getMonth()
			: monthIndex(end);
	const totalMonths = lastMonth - monthIndex(start) + 1;
	const years = Math.floor(totalMonths / monthsPerYear);
	const remainder = totalMonths % monthsPerYear;

	return [
		years > 0 && `${years} ${years === 1 ? "yr" : "yrs"}`,
		remainder > 0 && `${remainder} ${remainder === 1 ? "mo" : "mos"}`,
	]
		.filter(Boolean)
		.join(" ");
};

const dateRange = (start: string, end: string | null) =>
	start === end ? start : `${start} — ${end ?? "Present"}`;

export const ExperienceCard = (props: ExperienceCardProps) => {
	const latestRole = props.experience.roles.at(0);
	const firstRole =
		latestRole &&
		props.experience.roles.reduce(
			(earliest, role) =>
				monthIndex(role.start) < monthIndex(earliest.start) ? role : earliest,
			latestRole,
		);

	return (
		<Card variant="primary" size="md" shape="wide" orientation="landscape">
			<header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
				<div className="flex items-center gap-4">
					<Monogram
						monogram={props.experience.company.name.charAt(0)}
						className="title rounded-xl border-accent/25 text-2xl"
					/>
					<div>
						<h3 className="title text-2xl sm:text-3xl">
							{props.experience.company.link ? (
								<a href={props.experience.company.link.url}>
									{props.experience.company.name}
								</a>
							) : (
								props.experience.company.name
							)}
						</h3>
						{latestRole && (
							<div className="mt-1 flex flex-wrap gap-x-1.5 text-base text-text-primary/80">
								<div className="font-semibold">Highest Role:</div>
								<div className="font-bold text-accent">{latestRole.title}</div>
							</div>
						)}
					</div>
				</div>
				{firstRole !== undefined && latestRole !== undefined && (
					<div className="shrink-0 sm:text-right">
						<p className="sub-title text-base text-accent">
							{dateRange(firstRole.start, latestRole.end)}
						</p>
						<p className="mt-1 font-mono text-xs text-text-primary/80">
							{tenure(firstRole.start, latestRole.end)} total
						</p>
					</div>
				)}
			</header>
			{latestRole && (
				<ol className="border-t border-text-primary/10 pt-6">
					{props.experience.roles.map((role) => (
						<li
							key={`${role.start}-${role.title}`}
							className="relative ml-2 pb-8 pl-6 before:absolute before:top-3.25 before:left-0 before:h-full before:w-0.5 before:bg-text-primary/10 last:pb-0 last:before:hidden sm:pl-8"
						>
							<span
								aria-hidden="true"
								className={`absolute left-px top-1.5 size-3.5 -translate-x-1/2 rounded-full border-2 border-accent ring-4 ring-background-secondary ${role.end === null ? "bg-accent" : "bg-background-primary"}`}
							/>
							<div className="flex flex-col gap-x-4 gap-y-1 sm:flex-row sm:items-baseline sm:justify-between">
								<div className="flex flex-wrap items-center gap-x-2 gap-y-1">
									<h4 className="sub-title text-xl">{role.title}</h4>
									{role.end === null && (
										<Tag label="Current Role" variant="primary" />
									)}
								</div>
								<p className="shrink-0 font-mono text-xs text-text-primary/80">
									{dateRange(role.start, role.end)}
								</p>
							</div>
							{role.impacts.length > 0 && (
								<div className="mt-4">
									<ul className="mt-2 list-none space-y-1 pl-5 text-base leading-relaxed text-text-primary/85">
										{role.impacts.map((impact) => (
											<li key={impact}>{impact}</li>
										))}
									</ul>
								</div>
							)}
						</li>
					))}
				</ol>
			)}
		</Card>
	);
};
