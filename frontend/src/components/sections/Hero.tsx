import { DynamicHero } from "@/components/hero/DynamicHero.tsx";
import { HeroCard } from "@/components/hero/HeroCard.tsx";

export const Hero = () => (
	<section className="section" aria-labelledby="hero-name">
		<HeroCard />
		<DynamicHero />
	</section>
);
