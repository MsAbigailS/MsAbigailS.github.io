import "@/index.css";
import { Trash2 } from "lucide-react";
import AnimatedContent from "@/components/AnimatedContent.jsx";
import PillNav from "@/components/PillNav";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { Hero } from "@/components/sections/Hero";
export function App() {
	return (
		<div className="mx-auto max-w-content pb-card-inset">
			<header className="relative z-10 flex min-h-15 items-center justify-center py-2">
				<PillNav
					logo={<Trash2 />}
					logoAlt="Company"
					items={[
						{ label: "About", href: "/" },
						{ label: "Experience", href: "/experience" },
						{ label: "Projects", href: "/projects" },
						{ label: "Awards", href: "/awards" },
					]}
					activeHref="/"
					itemStyle="plain"
					hoverEffect="glide"
					indicator="pill"
					layout="split"
					surface="glass"
					size="md"
					bounce={0.37}
					stretch={0.5}
					collapse="auto"
					intro
				/>
			</header>

			<AnimatedContent
				className="mt-[clamp(2rem,4.4vw,4.125rem)] grid gap-section"
				distance={120}
				direction="vertical"
				duration={1.6}
				ease="elastic.out(1, 0.55)"
				blur={0}
				stagger={0.08}
				threshold={0.1}
			>
				<Hero />
				<ExperienceSection />
			</AnimatedContent>
		</div>
	);
}
