import Lanyard from "@/components/Lanyard.jsx";

export const DynamicHero = () => (
	<div className="relative col-span-full row-start-1 h-[clamp(14rem,52vw,20rem)] md:col-span-4 md:col-start-9 md:h-auto">
		<Lanyard
			frontImage={null}
			backImage={null}
			strapImage={null}
			imageFit="cover"
			cardColor="#ffffff"
			orientation="portrait"
			finish="glossy"
			cornerRadius={0.3}
			size={0.8}
			anchor="center"
			style={{ position: "absolute", inset: 0 }}
			strapLength={0.5}
			strapColor="#111111"
			strapWidth={0.65}
			metal="silver"
			gravity={0.7}
			damping={0.1}
			elasticity={0.25}
			breeze={1}
			interactive={true}
			overlay={true}
			intro={true}
		/>
	</div>
);
