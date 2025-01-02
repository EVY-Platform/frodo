import Canva from "../components/Layout/Canva.tsx";
import Input from "../components/Layout/Input.tsx";
import Logo from "../components/Logo.tsx";
import Panel from "../components/Layout/Panel.tsx";

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

export default function Home() {
	const panelStyles = "w-72 overflow-scroll [&::-webkit-scrollbar]:hidden";
	const headingStyles = "p-2 font-bold text-lg text-center";
	return (
		<div class="h-screen flex flex-col">
			<nav class=" p-4 border-b">
				<Logo />
			</nav>
			{/*subtract the height of the nav from the height of the screen*/}
			<div class="flex flex-1 h-[calc(100vh-48px)]">
				<div class={`${panelStyles} border-r`}>
					<p class={headingStyles}>Rows</p>
					<Panel border="border-b border-t">
						{/* View rows */}
						<InfoRow />
						<TextRow />
						<InputListRow />

						{/* Action rows */}
						<ButtonRow />
						<TextActionRow />

						{/* Edit rows */}
						<CalendarRow />
						<DropdownRow />
						<InlinePickerRow />
						<InputRow />
						<SearchRow />
						<SelectPhotoRow />
						<TextAreaRow />
						<TextSelectRow />
					</Panel>
				</div>
				<div class="flex-1">
					<Canva />
				</div>
				<div class={`${panelStyles} border-l`}>
					<p class={headingStyles}>Row configuration</p>
					<Panel>
						{/* Todo: build dynamic configuraiton system */}
						{[
							{ id: "title", type: "text" },
							{ id: "info", type: "text" },
						].map((line) => {
							switch (line.type) {
								case "text":
									return (
										<div class="p-2">
											<label class="block mb-2 capitalize">
												{line.id}
											</label>
											<Input />
										</div>
									);
								default:
									throw new Error(
										"Invalid configuration type"
									);
							}
						})}
					</Panel>
				</div>
			</div>
		</div>
	);
}
