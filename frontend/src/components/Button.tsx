import { LoaderCircle, type LucideIcon } from "lucide-react";
import type { ComponentProps, MouseEventHandler } from "react";
import SpecularButton from "@/components/SpecularButton.tsx";
import { Button as StyledButton } from "@/components/ui/button.tsx";

const accentAppearance = {
	tint: "var(--accent)",
	tintOpacity: 1,
	textColor: "var(--accent-foreground)",
	style: { outlineColor: "var(--accent)" },
	lineColor: "var(--accent)",
};

export type ButtonVariant =
	| NonNullable<ComponentProps<typeof StyledButton>["variant"]>
	| "accent";

export interface ButtonProps {
	label: string;
	aria: string;
	icon?: LucideIcon;
	variant?: ButtonVariant;
	size?: "sm" | "md" | "lg";
	onClick?: MouseEventHandler<HTMLButtonElement>;
	isLoading?: boolean;
	isDisabled?: boolean;
}

export function Button({
	label,
	icon,
	variant = "default",
	size = "lg",
	onClick,
	isLoading = false,
	isDisabled = false,
	aria,
}: ButtonProps) {
	const Icon = isLoading ? LoaderCircle : icon;
	const content = (
		<>
			{Icon ? (
				<Icon
					aria-hidden="true"
					className={isLoading ? "motion-safe:animate-spin" : undefined}
					data-icon="inline-start"
					size="1em"
				/>
			) : null}
			{label}
		</>
	);
	const buttonProps = {
		"aria-busy": isLoading || undefined,
		disabled: isDisabled || isLoading,
		onClick,
	};

	if (variant === "default" || variant === "accent") {
		return (
			<SpecularButton
				{...buttonProps}
				{...(variant === "accent" && accentAppearance)}
				size={size}
				radius={12}
				idleIntensity={0.5}
				shineSize={6}
				shineFade={22}
				thickness={1}
				glow={0}
				aria-label={aria}
			>
				{content}
			</SpecularButton>
		);
	}

	return (
		<StyledButton
			{...buttonProps}
			type="button"
			variant={variant}
			size={size === "md" ? "default" : size}
			aria-label={aria}
		>
			{content}
		</StyledButton>
	);
}
