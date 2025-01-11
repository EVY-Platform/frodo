import { useSignal } from "@preact/signals";

import List from "../components/Layout/List.tsx";
import Draggable, { dragging } from "./Draggable.tsx";

export default function Canva() {
	const rows = useSignal([]);

	let overflowStyles = dragging.value
		? "overflow-visible"
		: "overflow-y-scroll";

	const draggableChildren = rows.value.map((Row) => (
		<Draggable>
			<Row />
		</Draggable>
	));

	return (
		<div class="relative">
			<img
				class="m-auto h-[calc(100vh-92px)] overflow-y-scroll"
				src="/phone.svg"
				alt="phone"
			/>
			<div
				class={`m-auto rounded-3xl -mt-[calc(100vh-180px)] w-[calc(1/2.7*100vh)] h-[calc(100vh-220px)] ${overflowStyles}`}
			>
				<List>{draggableChildren}</List>
			</div>
		</div>
	);
}
