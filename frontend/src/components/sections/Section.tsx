import type { ReactNode } from "react";

type SectionProps = {
	title: string;
	children: ReactNode;
};

export const Section = (props: SectionProps) => (
	<section className="grid gap-5 lg:gap-7">
		<h2 className="tech-title text-accent text-sm">{props.title}</h2>
		{props.children}
	</section>
);
