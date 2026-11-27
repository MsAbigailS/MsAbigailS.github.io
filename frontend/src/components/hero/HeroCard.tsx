import type { ReactNode } from "react";
import { Button } from "@/components/Button.tsx";
import { Card } from "@/components/Card.tsx";
import { useMe } from "@/hooks/useMe.tsx";
import { useSocials } from "@/hooks/useSocials.tsx";

const Header = (props: { me: ReturnType<typeof useMe> }): ReactNode => (
	<div className="sub-title flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-sm">
		<div className="rounded-full bg-accent/25 px-3.5 py-1.5">ABC</div>
		<div className="font-normal">
			{`${props.me.location.city}, ${props.me.location.state}`}
		</div>
	</div>
);

const Footer = (props: { actions: ReturnType<typeof useSocials> }) => (
	<div className="mt-auto flex flex-wrap items-center gap-2.5">
		{props.actions.socials.map((value) => (
			<Button
				key={value.name}
				label={value.name}
				icon={value.icon}
				variant={value.variant}
				size="md"
			/>
		))}
	</div>
);

export const HeroCard = () => {
	const me: ReturnType<typeof useMe> = useMe();
	const socials: ReturnType<typeof useSocials> = useSocials();

	return (
		<Card
			variant="primary"
			size="md"
			header={<Header me={me} />}
			footer={<Footer actions={socials} />}
		>
			<div>
				<h1 className="title text-display">{me.name}</h1>
				<p className="sub-title mt-2.5 text-2xl text-accent lg:text-3xl">
					{me.title}
				</p>
				<p className="mt-4 text-body text-text-primary/85 lg:mt-6 lg:text-xl">
					{me.elevator}
				</p>
			</div>
		</Card>
	);
};
