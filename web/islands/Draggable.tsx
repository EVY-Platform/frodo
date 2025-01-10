import { signal, useSignal, effect } from "@preact/signals";
import { PageProps } from "$fresh/server.ts";

export const dragging = signal(false);

const position = signal({ x: 0, y: 0 });
const offset = signal({ x: 0, y: 0 });
const draggingZIndex = 100;
const defaultZIndex = 1;

export default function Draggable({ children, identifier }: PageProps) {
	const localPosition = useSignal({ x: 0, y: 0 });
	const localDragging = useSignal(false);

	// When position changes, update the element if it's
	// the one that needs to be moved
	effect(() => {
		if (!localDragging.value) return;
		localPosition.value = position.value;
	}, [position]);

	const handleMouseDown = (e: MouseEvent) => {
		dragging.value = localDragging.value = true;
		position.value = { x: 0, y: 0 };
		offset.value = {
			x: e.clientX - localPosition.value.x,
			y: e.clientY - localPosition.value.y,
		};
	};

	const handleMouseUp = () => {
		position.value = {
			x: 0,
			y: 0,
		};
		dragging.value = localDragging.value = false;
	};

	const handleMouseMove = (e: MouseEvent) => {
		position.value = {
			x: e.clientX - offset.value.x,
			y: e.clientY - offset.value.y,
		};
	};

	return (
		<div
			style={{
				transform: `translate(${localPosition.value.x}px,${localPosition.value.y}px)`,
				cursor: "grab",
				zIndex: localDragging.value ? draggingZIndex : defaultZIndex,
			}}
			class="border-b border-t bg-white"
			onMouseDown={handleMouseDown}
			onMouseMove={handleMouseMove}
			onMouseUp={handleMouseUp}
			onMouseLeave={handleMouseUp}
		>
			<div class="pointer-events-none select-none">{children}</div>
		</div>
	);
}
