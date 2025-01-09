import Canva from "../components/Layout/Canva.tsx";
import Logo from "../components/Shared/Logo.tsx";
import PanelOfRows from "../islands/PanelOfRows.tsx";
import PanelOfConfiguration from "../islands/PanelRowConfiguration.tsx";

export default function Home() {
	const rowWidth = "w-72";
	const headingStyles = "p-2 font-bold text-lg text-center";
	return (
		<div class="h-screen flex flex-col">
			<nav class=" p-4 border-b">
				<Logo />
			</nav>
			{/*subtract the height of the nav from the height of the screen*/}
			<div class="flex flex-1 h-[calc(100vh-48px)]">
				<PanelOfRows
					width={rowWidth}
					titleStyles={headingStyles}
					panelStyles="border-r"
				/>
				<div class="flex-1">
					<Canva />
				</div>
				<PanelOfConfiguration
					width={rowWidth}
					titleStyles={headingStyles}
					panelStyles="border-l"
				/>
			</div>
		</div>
	);
}
