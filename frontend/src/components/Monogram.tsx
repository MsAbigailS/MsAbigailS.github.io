import { cn } from "@/lib/utils.ts";

interface MonogramProps {
	readonly monogram: string;
	readonly className?: string;
}

export const Monogram = (props: MonogramProps) => (
	<div
		className={cn(
			"grid size-14 shrink-0 place-items-center rounded-lg border border-accent bg-accent/10 p-4 text-accent",
			props.className,
		)}
	>
		{props.monogram}
	</div>
);
