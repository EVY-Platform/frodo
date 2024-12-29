import Canva from "../components/Layout/Canva.tsx";
import Input from "../components/Layout/Input.tsx";
import Logo from "../components/Logo.tsx";
import Panel from "../components/Layout/Panel.tsx";

import InfoRow, {
	configuration as infoRowConfiguration,
} from "../components/Rows/InfoRow.tsx";
import InputListRow, {
	configuration as inputListRowConfiguration,
} from "../components/Rows/InputListRow.tsx";
import TextRow, {
	configuration as textRowConfiguration,
} from "../components/Rows/TextRow.tsx";
import TextActionRow, {
	configuration as textActionRowConfiguration,
} from "../components/Rows/TextActionRow.tsx";

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
						<InfoRow />
						<TextRow />
						<TextActionRow />
						<InputListRow />
						<TextRow />
						<TextRow />
						<TextRow />
						<TextRow />
						<TextRow />
						<TextRow />
						<TextRow />
						<TextRow />
						<TextRow />
					</Panel>
				</div>
				<div class="flex-1">
					<Canva />
				</div>
				<div class={`${panelStyles} border-l`}>
					<p class={headingStyles}>Row configuration</p>
					<Panel>
						{infoRowConfiguration.map((line) => {
							switch (line.type) {
								case "text":
									return (
										<div class="p-2">
											<Input
												identifier={line.id}
												title={line.id}
											/>
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
