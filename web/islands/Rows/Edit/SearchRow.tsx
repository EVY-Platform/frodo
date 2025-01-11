import Input from "../../../components/Layout/Input.tsx";

import { dragging, configuration } from "../../Draggable.tsx";

export default function SearchRow() {
	if (dragging.value === "SearchRow") {
		configuration.value = [
			{ id: "title", type: "text" },
			{ id: "placeholder", type: "text" },
		];
	}
	return (
		<div class="p-2">
			<p class="pb-2">Search row</p>
			<div class="relative">
				<div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
					<img class="h-4" src="/search.svg" alt="Search" />
				</div>
				<Input />
			</div>
		</div>
	);
}
