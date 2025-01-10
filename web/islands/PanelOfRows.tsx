import List from "../components/Layout/List.tsx";
import Draggable, { dragging } from "./Draggable.tsx";

import InfoRow from "../components/Rows/View/InfoRow.tsx";
import InputListRow from "../components/Rows/View/InputListRow.tsx";
import TextRow from "../components/Rows/View/TextRow.tsx";

import ButtonRow from "../components/Rows/Action/ButtonRow.tsx";
import TextActionRow from "../components/Rows/Action/TextActionRow.tsx";

import CalendarRow from "../components/Rows/Edit/CalendarRow.tsx";
import DropdownRow from "../components/Rows/Edit/DropdownRow.tsx";
import InlinePickerRow from "../components/Rows/Edit/InlinePickerRow.tsx";
import InputRow from "../components/Rows/Edit/InputRow.tsx";
import SearchRow from "../components/Rows/Edit/SearchRow.tsx";
import SelectPhotoRow from "../components/Rows/Edit/SelectPhotoRow.tsx";
import TextAreaRow from "../components/Rows/Edit/TextAreaRow.tsx";
import TextSelectRow from "../components/Rows/Edit/TextSelectRow.tsx";

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
	let overflowStyles = dragging.value
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
		<Draggable id={Row.name}>
			<Row />
		</Draggable>
	));
	return (
		<div class={`${width} ${panelStyles} ${overflowStyles}`}>
			<p class={titleStyles}>Rows</p>
			<List>{draggableChildren}</List>
		</div>
	);
}
