import { useAwards } from "@/hooks/useAwards";

export const Hero = () => {
	const awards = useAwards();
	return (
		<div>
			{awards.map((value) => (
				<div key={value.name}>{value.name}</div>
			))}
		</div>
	);
};
