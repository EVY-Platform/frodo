import List from "../components/Layout/List.tsx";
import Input from "../components/Layout/Input.tsx";

import { dragging, configuration } from "./Draggable.tsx";

interface Props {
	width: string;
	panelStyles: string;
}

export default function PanelOfConfiguration({ width, panelStyles }: Props) {
	const children = configuration.value.map((line) => {
		switch (line.type) {
			case "text":
				return (
					<div class="p-2">
						<label class="block mb-2 capitalize">{line.id}</label>
						<Input />
					</div>
				);
			default:
				throw new Error("Invalid configuration type");
		}
	});

	return (
		<div class={`${width} ${panelStyles}`}>
			<h1>Row configuration</h1>
			<div class={dragging.value ? "hidden" : ""}>
				<List>{children}</List>
			</div>
		</div>
	);
}
