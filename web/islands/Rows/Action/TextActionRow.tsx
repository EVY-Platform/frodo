import { dragging, configuration } from "../../Draggable.tsx";

export default function TextActionRow() {
	if (dragging.value === "TextActionRow") {
		configuration.value = [
			{ id: "title", type: "text" },
			{ id: "placeholder", type: "text" },
			{ id: "action", type: "text" },
		];
	}
	return (
		<div class="p-2">
			<p class="pb-2">Text action row title</p>
			<div class="flex justify-between">
				<p class="text-evy-light">Placeholder</p>
				<button class="text-evy-blue hover:text-black">Action</button>
			</div>
		</div>
	);
}
