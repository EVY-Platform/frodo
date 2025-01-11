import Input from "../../../components/Layout/Input.tsx";

import { dragging, configuration } from "../../Draggable.tsx";

export default function InputRow() {
	if (dragging.value === "InputRow") {
		configuration.value = [
			{ id: "title", type: "text" },
			{ id: "placeholder", type: "text" },
		];
	}
	return (
		<div class="p-2">
			<p class="pb-2">Input row title</p>
			<Input />
		</div>
	);
}
