interface MonogramProps {
	monogram: string;
}

export const Monogram = (props: MonogramProps) => (
	<div className="grid size-14 shrink-0 place-items-center rounded-lg border border-accent bg-accent/10 p-4 text-accent">
		{props.monogram}
	</div>
);
