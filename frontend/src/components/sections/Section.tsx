import type { ReactNode } from "react";
import AnimatedContent from "@/components/AnimatedContent.tsx";

interface SectionProps {
	readonly children: ReactNode;
	readonly title?: string;
	readonly subtitle?: string;
	readonly animateOpacity?: boolean;
}

export const Section = (props: SectionProps) => (
	<AnimatedContent
		className="mt-[clamp(2rem,4.4vw,4.125rem)] grid gap-section"
		distance={120}
		direction="vertical"
		duration={1.6}
		animateOpacity={props.animateOpacity}
		ease="elastic.out(1, 0.55)"
		blur={0}
		stagger={0.08}
		threshold={0.1}
		container={undefined}
		onStart={undefined}
		onComplete={undefined}
		onDisappearanceComplete={undefined}
		style={undefined}
		once={false}
	>
		<section className="grid gap-5 lg:gap-7">
			<h2 className="tech-title text-accent text-sm">{props.subtitle}</h2>
			<h2 className="title text-text-primary text-4xl">{props.title}</h2>
			{props.children}
		</section>
	</AnimatedContent>
);
