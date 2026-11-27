import "@/index.css";
import { Navbar } from "@/components/Navbar.tsx";
import { ExperienceSection } from "@/components/sections/ExperienceSection.tsx";
import { Hero } from "@/components/sections/Hero.tsx";

export function App() {
	return (
		<div>
			<Navbar />
			<div className="mt-12">
				<Hero />
			</div>
			<ExperienceSection />
		</div>
	);
}
