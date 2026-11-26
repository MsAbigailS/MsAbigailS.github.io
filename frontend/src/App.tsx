import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card.tsx";
import { APITester } from "./APITester.tsx";
import "./index.css";
import Lanyard from "./components/Lanyard.jsx";

// biome-ignore lint/correctness/noUnresolvedImports: Bun and Vite import SVG assets as URLs.
import logo from "./logo.svg";
// biome-ignore lint/correctness/noUnresolvedImports: Bun and Vite import SVG assets as URLs.
import reactLogo from "./react.svg";
import AnimatedContent from "./components/AnimatedContent";

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
			<h2>Ship it before lunch</h2>
			<p>Every child animates in turn.</p>
		</AnimatedContent>
	);
}
