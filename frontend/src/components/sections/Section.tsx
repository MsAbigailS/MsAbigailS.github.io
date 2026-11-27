import type { ReactNode } from "react";
import AnimatedContent from "@/components/AnimatedContent.jsx";

interface SectionProps {
	readonly title: string;
	readonly children: ReactNode;
}

export const Section = (props: SectionProps) => (
	<AnimatedContent
		className="mt-[clamp(2rem,4.4vw,4.125rem)] grid gap-section"
		distance={120}
		direction="vertical"
		duration={1.6}
		ease="elastic.out(1, 0.55)"
		blur={0}
		stagger={0.08}
		threshold={0.1}
		container={undefined}
		onStart={undefined}
		onComplete={undefined}
		onDisappearanceComplete={undefined}
		style={undefined}
	>
		<section className="grid gap-5 lg:gap-7">
			<h2 className="tech-title text-accent text-sm">{props.title}</h2>
			{props.children}
		</section>
	</AnimatedContent>
);
