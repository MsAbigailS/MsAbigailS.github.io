import { Rocket, Trophy } from "lucide-react";
import type { ReactNode } from "react";
import Lanyard from "@/components/Lanyard.tsx";
import { Monogram } from "@/components/Monogram.tsx";
import { useMe } from "@/hooks/useMe.tsx";

const LanyardFront = (props: { readonly name: string }) => (
	<div className="flex h-full flex-col items-center justify-center gap-5 bg-background-primary px-5 text-center text-text-primary">
		<Monogram className="title text-2xl" monogram={props.name.charAt(0)} />
		<span className="title text-4xl">{props.name}</span>
	</div>
);

interface Stats {
	readonly name: string;
	readonly stat: string;
	readonly icon: ReactNode;
}

const LanyardBack = (props: { stats: Stats[] }) => (
	<div className="flex h-full flex-col items-center justify-center gap-3 bg-background-secondary px-5 text-center text-background-primary">
		{props.stats.map((value) => (
			<div
				key={value.name}
				className="w-full flex flex-row items-center justify-between bg-background-primary rounded-sm p-2 text-xs text-text-primary"
			>
				<div className="flex flex-row gap-2 items-center justify-start">
					{value.icon}
					{value.name}
				</div>
				{value.stat}
			</div>
		))}
	</div>
);

export const DynamicHero = () => {
	const me: ReturnType<typeof useMe> = useMe();
	return (
		<div className="relative col-span-full row-start-1 h-[clamp(14rem,52vw,20rem)] md:col-span-4 md:col-start-9 md:h-auto">
			<Lanyard
				frontContent={<LanyardFront name={me.name} />}
				backContent={
					<LanyardBack
						stats={[
							{ name: "Hackathon Wins", stat: "Nx Winner", icon: <Trophy /> },
							{ name: "Background", stat: "N Startups", icon: <Rocket /> },
						]}
					/>
				}
				imageFit="cover"
				cardColor="#ffffff"
				orientation="portrait"
				finish="glossy"
				cornerRadius={0.3}
				size={1}
				anchor="center"
				style={{ position: "absolute", inset: 0 }}
				strapLength={0}
				strapColor="#111111"
				strapWidth={0.6}
				gravity={0.7}
				damping={0.1}
				elasticity={0.25}
				breeze={1}
				interactive={true}
				overlay={true}
				attachToPageTop={true}
				intro={true}
			/>
		</div>
	);
};
