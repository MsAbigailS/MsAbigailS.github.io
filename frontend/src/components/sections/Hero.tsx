import { Button } from "@/components/Button.tsx";
import Lanyard from "@/components/Lanyard.jsx";
import { Card } from "@/components/ui/card.tsx";
import { useMe } from "@/hooks/useMe.tsx";
import { useSocials } from "@/hooks/useSocials.tsx";

export const Hero = () => {
	const me: ReturnType<typeof useMe> = useMe();
	const socials: ReturnType<typeof useSocials> = useSocials();
	return (
		<section
			className="grid grid-cols-12 gap-4 lg:gap-7"
			aria-labelledby="hero-name"
		>
			<Card className="card col-span-full gap-7 md:col-span-8 md:min-h-[clamp(24rem,33.7vw,31.5rem)] lg:gap-9">
				<div className="sub-title flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-sm">
					<div className="rounded-full bg-accent/25 px-3.5 py-1.5">ABC</div>
					<div className="font-normal">
						{me.location.city}, {me.location.state}
					</div>
				</div>

				<div>
					<h1 className="title text-display">{me.name}</h1>
					<p className="sub-title mt-2.5 text-2xl text-accent lg:text-3xl">
						{me.title}
					</p>
					<p className="mt-4 text-body text-text-primary/85 lg:mt-6 lg:text-xl">
						{me.elevator}
					</p>
				</div>

				<div className="mt-auto flex flex-wrap items-center gap-2.5">
					{socials.socials.map((value) => (
						<Button
							key={value.name}
							label={value.name}
							icon={value.icon}
							variant={value.variant}
							size="md"
						/>
					))}
				</div>
			</Card>
			<div className="relative col-span-full row-start-1 h-[clamp(14rem,52vw,20rem)] md:col-span-4 md:col-start-9 md:h-auto">
				<Lanyard
					frontImage={null}
					backImage={null}
					strapImage={null}
					imageFit="cover"
					cardColor="#ffffff"
					orientation="portrait"
					finish="glossy"
					cornerRadius={0.3}
					size={0.8}
					anchor="center"
					style={{ position: "absolute", inset: 0 }}
					strapLength={0.5}
					strapColor="#111111"
					strapWidth={0.65}
					metal="silver"
					gravity={0.7}
					damping={0.1}
					elasticity={0.25}
					breeze={1}
					interactive={true}
					overlay={true}
					intro={true}
				/>
			</div>
		</section>
	);
};
