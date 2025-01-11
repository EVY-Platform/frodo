import { dragging, configuration } from "../../Draggable.tsx";

export default function TextSelectRow() {
	if (dragging.value === "TextSelectRow") {
		configuration.value = [
			{ id: "title", type: "text" },
			{ id: "text", type: "text" },
		];
	}
	return (
		<div class="p-2">
			<p class="pb-2">Text select row title</p>
			<div class="flex justify-between">
				<p class="text-evy-light">Text</p>
				<input
					id="checkbox"
					type="checkbox"
					value=""
					class="w-4 h-4 bg-evy-gray border-evy-gray rounded"
				/>
			</div>
		</div>
	);
}
