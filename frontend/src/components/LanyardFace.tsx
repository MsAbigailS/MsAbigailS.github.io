import { toCanvas } from "html-to-image";
import { type ReactNode, useEffect, useRef } from "react";

interface LanyardFaceProps {
	readonly side: "front" | "back";
	readonly aspectRatio: string;
	readonly textureWidth: number;
	readonly children: ReactNode;
	readonly onCapture: (
		side: "front" | "back",
		canvas: HTMLCanvasElement | null,
	) => void;
}

export const LanyardFace = ({
	side,
	aspectRatio,
	textureWidth,
	children,
	onCapture,
}: LanyardFaceProps) => {
	const faceRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const face = faceRef.current;
		if (!face) {
			return;
		}
		let revision = 0;
		let frame = 0;

		const scheduleCapture = () => {
			const current = ++revision;
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(async () => {
				try {
					await Promise.all([
						document.fonts.ready,
						...Array.from(face.querySelectorAll("img"), (image) =>
							image.decode(),
						),
					]);
					if (current !== revision) {
						return;
					}
					const canvas = await toCanvas(face, {
						pixelRatio: textureWidth / face.clientWidth,
					});
					if (current === revision) {
						onCapture(side, canvas);
					}
				} catch {
					if (current === revision) {
						// Use the face's image or card color if its content can't be captured.
						onCapture(side, null);
					}
				}
			});
		};

		const observer = new MutationObserver(scheduleCapture);
		observer.observe(face, {
			attributes: true,
			characterData: true,
			childList: true,
			subtree: true,
		});
		scheduleCapture();
		return () => {
			++revision;
			observer.disconnect();
			cancelAnimationFrame(frame);
			onCapture(side, null);
		};
	}, [side, textureWidth, onCapture]);

	return (
		<div
			aria-hidden="true"
			inert={true}
			className="absolute right-full top-0 w-64 pointer-events-none"
		>
			<div
				ref={faceRef}
				style={{ aspectRatio }}
				className="w-full overflow-hidden"
			>
				{children}
			</div>
		</div>
	);
};
