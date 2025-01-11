import { dragging, configuration } from "../../Draggable.tsx";

export default function TextRow() {
	if (dragging.value === "TextRow") {
		configuration.value = [
			{ id: "title", type: "text" },
			{ id: "text", type: "text" },
		];
	}
	return (
		<div class="p-2">
			<p class="pb-2">Text row title</p>
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry.
			</p>
		</div>
	);
}
