export default function TextActionRow() {
	return (
		<div class="p-2">
			<p>Text action row title</p>
			<div class="flex justify-between">
				<p class="text-evy-grey">Placeholder</p>
				<p class="text-evy-blue">Action</p>
			</div>
		</div>
	);
}

export const TextActionRowConfiguration = [
	{ id: "title", type: "text" },
	{ id: "text", type: "text" },
	{ id: "action", type: "text" },
];
