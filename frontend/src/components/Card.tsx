import type { ReactNode } from "react";
import SpotlightCard from "@/components/SpotlightCard.tsx";
import { Card as CardShadCn } from "@/components/ui/card.tsx";

const baseStyle: string = "card gap-7 flex flex-col";

type CardVariant = "primary" | "spotlight";
type CardSize = "md";
type CardShape = "wide" | "rectangle";
type CardOrientation = "portrait" | "landscape";

interface CardProps {
	readonly variant: CardVariant;
	readonly size: CardSize;
	readonly shape: CardShape;
	readonly orientation: CardOrientation;
	readonly children: ReactNode;
	readonly header?: ReactNode;
	readonly footer?: ReactNode;
}

const CardStyles: Record<CardVariant, string> = {
	primary:
		"border border-text-primary/10 bg-background-secondary p-card-inset text-text-primary ring-0",
	spotlight: "",
};

const RectangleSizes: Record<CardSize, Record<CardOrientation, string>> = {
	md: {
		landscape: "col-span-8 min-h-[clamp(24rem,33.7vw,31.5rem)]",
		portrait:
			"col-span-4 aspect-[54/86] w-full max-w-[clamp(24rem,33.7vw,31.5rem)] self-start",
	},
};

export const Card = (props: CardProps) => {
	const layout =
		props.shape === "wide"
			? "col-span-full h-auto w-full self-start"
			: RectangleSizes[props.size][props.orientation];
	const style = `${baseStyle} ${CardStyles[props.variant]} ${layout}`;

	if (props.variant === "spotlight") {
		return (
			<SpotlightCard
				theme="dark"
				spotlightColor="#ffffff"
				intensity={0.05}
				spotlightSize={240}
				softness={0.7}
				shape="circle"
				borderGlow={0.6}
				proximity={80}
				smoothing={0.3}
				grain={0.5}
				className={style}
				flare={true}
				style={undefined}
				ambient={true}
			>
				{props.header}
				{props.children}
				{props.footer}
			</SpotlightCard>
		);
	}

	return (
		<CardShadCn className={style}>
			{props.header}
			{props.children}
			{props.footer}
		</CardShadCn>
	);
};
