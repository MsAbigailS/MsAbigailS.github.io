import { type ReactNode, useMemo } from "react";

const styleBase: string =
	"flex flex-row gap-2 items-center justify-center rounded-full px-3.5 py-1.5";

type TagVariant = "primary";

interface TagProps {
	readonly label: string;
	readonly variant: TagVariant;
	readonly icon?: ReactNode;
}

interface Style {
	readonly tag: string;
	readonly icon: string;
}

const TagStyles: Record<TagVariant, Style> = {
	primary: {
		tag: "inline-flex shrink-0 text-text-primary/50 empty:hidden",
		icon: "bg-tertiary text-text-primary/50",
	},
};

const getTagStyles = (style: keyof typeof TagStyles): Style => ({
	tag: TagStyles[style].tag,
	icon: TagStyles[style].icon,
});

export const Tag = (props: TagProps) => {
	const style: Style = useMemo(
		() => getTagStyles(props.variant),
		[props.variant],
	);
	return (
		<div className={`${styleBase} ${style.icon}`}>
			<span className={style.tag}>{props.icon}</span>
			<span>{props.label}</span>
		</div>
	);
};
