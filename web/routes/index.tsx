import Canva from "../components/Layout/Canva.tsx";
import Input from "../components/Layout/Input.tsx";
import Logo from "../components/Shared/Logo.tsx";
import List from "../components/Layout/List.tsx";
import PanelOfRows from "../islands/PanelOfRows.tsx";

export default function Home() {
	const rowWidth = "w-72";
	const panelStyles = `${rowWidth} [&::-webkit-scrollbar]:hidden`;
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
				<div class={`${panelStyles} border-l`}>
					<p class={headingStyles}>Row configuration</p>
					<List>
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
					</List>
				</div>
			</div>
		</div>
	);
}
