import "@/index.css";
import { Footer } from "@/components/Footer.tsx";
import { Navbar } from "@/components/Navbar.tsx";
import { ExperienceSection } from "@/components/sections/ExperienceSection.tsx";
import { HackathonSection } from "@/components/sections/HackathonSection.tsx";
import { Hero } from "@/components/sections/Hero.tsx";
import { ProjectsSection } from "@/components/sections/ProjectsSection.tsx";
import ShapeGrid from "./components/ShapeGrid.tsx";

export function App() {
	return (
		<div className="isolate flex min-h-dvh flex-col">
			<div
				aria-hidden="true"
				className="pointer-events-none fixed inset-0 -z-10"
			>
				<ShapeGrid
					shape="cross"
					direction="up"
					lineColor="#3b3747"
					hoverColor="#ffffff"
					hoverFillColor="#ffffff"
					fillOpacity={0.25}
					cellSize={33}
					speed={0.1}
					tiltX={0}
					tiltY={0}
					rainbow={false}
					lineWidth={1}
					radius={3}
					trail={0.7}
					glow={0.1}
					twinkle={0.1}
					fade={0}
					clickCascade={true}
					intro={true}
				/>
			</div>
			<div className="mx-auto w-full max-w-content flex-1 overflow-clip pb-card-inset">
				<Navbar />
				<div className="mt-12">
					<Hero />
				</div>
				<ExperienceSection />
				<ProjectsSection />
				<HackathonSection />
			</div>
			<Footer />
		</div>
	);
}
