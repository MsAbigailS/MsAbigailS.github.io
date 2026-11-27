import { DynamicHero } from "@/components/hero/DynamicHero.tsx";
import { HeroCard } from "@/components/hero/HeroCard.tsx";

export const Hero = () => (
	<section
		className="grid grid-cols-12 gap-4 lg:gap-7"
		aria-labelledby="hero-name"
	>
		<HeroCard />
		<DynamicHero />
	</section>
);
