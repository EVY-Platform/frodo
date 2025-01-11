import List from "../components/Layout/List.tsx";
import Draggable, { dragging } from "./Draggable.tsx";

import InfoRow from "./Rows/View/InfoRow.tsx";
import InputListRow from "./Rows/View/InputListRow.tsx";
import TextRow from "./Rows/View/TextRow.tsx";

import ButtonRow from "./Rows/Action/ButtonRow.tsx";
import TextActionRow from "./Rows/Action/TextActionRow.tsx";

import CalendarRow from "./Rows/Edit/CalendarRow.tsx";
import DropdownRow from "./Rows/Edit/DropdownRow.tsx";
import InlinePickerRow from "./Rows/Edit/InlinePickerRow.tsx";
import InputRow from "./Rows/Edit/InputRow.tsx";
import SearchRow from "./Rows/Edit/SearchRow.tsx";
import SelectPhotoRow from "./Rows/Edit/SelectPhotoRow.tsx";
import TextAreaRow from "./Rows/Edit/TextAreaRow.tsx";
import TextSelectRow from "./Rows/Edit/TextSelectRow.tsx";

interface Props {
	width: string;
	panelStyles: string;
}

export default function PanelOfRows({ width, panelStyles }: Props) {
	let overflowStyles = !!dragging.value
		? "overflow-visible"
		: "overflow-y-scroll";
	const draggableChildren = [
		InfoRow,
		TextRow,
		InputListRow,

		ButtonRow,
		TextActionRow,

		CalendarRow,
		DropdownRow,
		InlinePickerRow,
		InputRow,
		SearchRow,
		SelectPhotoRow,
		TextAreaRow,
		TextSelectRow,
	].map((Row) => (
		<Draggable identifier={Row.name}>
			<Row />
		</Draggable>
	));
	return (
		<div class={`${width} ${panelStyles} ${overflowStyles}`}>
			<h1>Rows</h1>
			<List>{draggableChildren}</List>
		</div>
	);
}
