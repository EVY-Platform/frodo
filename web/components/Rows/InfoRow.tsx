export default function InfoRow() {
	return (
		<div class="p-2">
			<p>Info row title</p>
			<p class="text-evy-grey">
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry.
			</p>
		</div>
	);
}

export const configuration = [
	{ id: "title", type: "text" },
	{ id: "info", type: "text" },
];
