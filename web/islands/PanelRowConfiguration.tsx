import List from "../components/Layout/List.tsx";
import Input from "../components/Layout/Input.tsx";

import { dragging } from "./Draggable.tsx";

interface Props {
	width: string;
	panelStyles: string;
	titleStyles: string;
}

export default function PanelOfRows({
	width,
	titleStyles,
	panelStyles,
}: Props) {
	// Todo: build dynamic configuraiton system
	const children = [
		{ id: "title", type: "text" },
		{ id: "info", type: "text" },
	].map((line) => {
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
	let displayStyles = dragging.value ? "hidden" : "";

	return (
		<div class={`${width} ${panelStyles}`}>
			<p class={titleStyles}>Row configuration</p>
			<div class={displayStyles}>
				<List>{children}</List>
			</div>
		</div>
	);
}
