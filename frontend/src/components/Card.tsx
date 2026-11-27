import { type ReactNode, useMemo } from "react";
import SpotlightCard from "@/components/SpotlightCard.jsx";
import { Card as CardShadCn } from "@/components/ui/card.tsx";

const baseStyle: string = "card gap-7 flex flex-col";

type CardVariant = "primary" | "spotlight";
type CardSize = "md";

interface CardProps {
	readonly variant: CardVariant;
	readonly size: CardSize;
	readonly children: ReactNode;
	readonly header?: ReactNode;
	readonly footer?: ReactNode;
}

const CardStyles: Record<CardVariant, string> = {
	primary: "bg-red-500",
	spotlight: "",
};

const CardSizes: Record<CardSize, string> = {
	md: "col-span-8 min-h-[clamp(24rem,33.7vw,31.5rem)]",
};

const getCardStyle = (props: {
	style: keyof typeof CardStyles;
	size: keyof typeof CardSizes;
}) => `${baseStyle} ${CardStyles[props.style]} ${CardSizes[props.size]}`;

export const Card = (props: CardProps) => {
	const style: string = useMemo(
		() => getCardStyle({ style: props.variant, size: props.size }),
		[props.variant, props.size],
	);

	if (props.variant === "spotlight") {
		return (
			<SpotlightCard
				theme="dark"
				spotlightColor="#ffffff"
				intensity={0.15}
				spotlightSize={240}
				softness={0.7}
				shape="circle"
				borderGlow={0.6}
				proximity={80}
				smoothing={0.3}
				grain={0}
				ambient={false}
				className={style}
				flare={true}
				style={undefined}
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
