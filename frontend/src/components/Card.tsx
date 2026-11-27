import { type ReactNode, useMemo } from "react";
import { Card as CardShadCn } from "@/components/ui/card.tsx";

type CardVariant = "primary";

interface CardProps {
	variant: CardVariant;
	children: ReactNode;
}

const CardStyles: Record<CardVariant, string> = {
	primary: "bg-red-500",
};

const getCardStyle = (props: { style: keyof typeof CardStyles }) =>
	CardStyles[props.style];

export const Card = (props: CardProps) => {
	const style = useMemo(
		() => getCardStyle({ style: props.variant }),
		[props.variant],
	);
	return <CardShadCn className={`card ${style}`}>{props.children}</CardShadCn>;
};
