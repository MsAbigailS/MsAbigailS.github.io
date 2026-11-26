import "@/index.css";
import Lanyard from "@/components/Lanyard.jsx";
import AnimatedContent from "@/components/AnimatedContent.jsx";

export function App() {
	return (
		<AnimatedContent
			distance={120}
			direction="vertical"
			duration={1.6}
			ease="elastic.out(1, 0.55)"
			blur={0}
			stagger={0.08}
			threshold={0.1}
		>
			<div className="border border-red-500 max-w-full max-h-screen">
				<Lanyard
					frontImage="https://honors.utdallas.edu/files/2024/01/abigail-smith-b9dfc8b909c4b04f.webp"
					backImage="/card-back.png"
					strapImage="/band.png"
					imageFit="cover"
					cardColor="#ffffff"
					orientation="portrait"
					finish="glossy"
					cornerRadius={0.3}
					size={0.56}
					anchor="center"
					strapLength={0.5}
					strapColor="#111111"
					strapWidth={0.65}
					metal="silver"
					gravity={0.7}
					damping={0.1}
					elasticity={0.25}
					breeze={1}
					interactive
					intro
				/>
			</div>
		</AnimatedContent>
	);
}
