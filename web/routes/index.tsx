import Canva from "../components/Layout/Canva.tsx";
import InfoRow, { InfoRowConfiguration } from "../components/Rows/InfoRow.tsx";
import Logo from "../components/Logo.tsx";
import Panel from "../components/Layout/Panel.tsx";
import TextRow, { TextRowConfiguration } from "../components/Rows/TextRow.tsx";
import TextActionRow, {
	TextActionRowConfiguration,
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
					</Panel>
				</div>
				<div class="flex-1">
					<p class={headingStyles}>Canva</p>
					<Canva />
				</div>
				<div class={`${panelStyles} border-l`}>
					<p class={headingStyles}>Row configuration</p>
					<Panel>
						{InfoRowConfiguration.map((line) => {
							switch (line.type) {
								case "text":
									return <p>Text input for {line.id}</p>;
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
