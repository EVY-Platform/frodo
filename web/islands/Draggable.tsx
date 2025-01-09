import { signal, useSignal } from "@preact/signals";
import { PageProps } from "$fresh/server.ts";

export const dragging = signal(false);

export default function Draggable({ children }: PageProps) {
	const position = useSignal({ x: 0, y: 0 });
	const offset = useSignal({ x: 0, y: 0 });

	const handleMouseDown = (e: MouseEvent) => {
		dragging.value = true;
		offset.value = {
			x: e.clientX - position.value.x,
			y: e.clientY - position.value.y,
		};
	};

	const handleMouseUp = () => {
		dragging.value = false;
		position.value = {
			x: 0,
			y: 0,
		};
	};

	const handleMouseMove = (e: MouseEvent) => {
		if (!dragging.value) return;
		position.value = {
			x: e.clientX - offset.value.x,
			y: e.clientY - offset.value.y,
		};
	};

	return (
		<div
			style={{
				transform: `translate(${position.value.x}px,${position.value.y}px)`,
				cursor: "grab",
			}}
			class="border-b border-t bg-white"
			onMouseDown={handleMouseDown}
			onMouseMove={handleMouseMove}
			onMouseUp={handleMouseUp}
		>
			<div class="pointer-events-none select-none">{children}</div>
		</div>
	);
}
