import { type ReactNode, useMemo } from "react";
import { Card as CardShadCn } from "@/components/ui/card.tsx";

const baseStyle: string = "card col-span-full gap-7";

type CardVariant = "primary";
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
};

const CardSizes: Record<CardSize, string> = {
	md: "col-span-8 min-h-[clamp(24rem,33.7vw,31.5rem)]",
};

const getCardStyle = (props: {
	style: keyof typeof CardStyles;
	size: keyof typeof CardSizes;
}) => `${CardStyles[props.style]} ${CardSizes[props.size]}`;

export const Card = (props: CardProps) => {
	const style: string = useMemo(
		() => getCardStyle({ style: props.variant, size: props.size }),
		[props.variant, props.size],
	);

	return (
		<CardShadCn className={`${baseStyle} ${style}`}>
			{props.header}
			{props.children}
			{props.footer}
		</CardShadCn>
	);
};
