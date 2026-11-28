import { useMemo } from "react";
import { Monogram } from "@/components/Monogram.tsx";
import { useMe } from "@/hooks/useMe.tsx";

export const Footer = () => {
	const me: ReturnType<typeof useMe> = useMe();

	const name: string = useMemo(
		() =>
			me.name
				.toUpperCase()
				.split(" ")
				.map((value) => value.charAt(0))
				.join("."),
		[me],
	);

	return (
		<footer className="footer">
			<div className="mx-auto flex w-full max-w-content justify-between">
				<div>{name}</div>
				<div>{me.title}</div>
			</div>
		</footer>
	);
};
