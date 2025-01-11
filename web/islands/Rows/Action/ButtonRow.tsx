import { dragging, configuration } from "../../Draggable.tsx";

export default function ButtonRow() {
	if (dragging.value === "ButtonRow") {
		configuration.value = [{ id: "text", type: "text" }];
	}
	return (
		<div class="p-2 flex justify-center">
			<button
				type="button"
				class="rounded-sm text-sm px-3 py-3 text-white bg-evy-gray hover:bg-black"
			>
				Button row text
			</button>
		</div>
	);
}
