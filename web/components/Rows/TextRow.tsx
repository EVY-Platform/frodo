export default function TextRow() {
	return (
		<div class="p-2">
			<p>Text row title</p>
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry.
			</p>
		</div>
	);
}

export const configuration = [
	{ id: "title", type: "text" },
	{ id: "text", type: "text" },
];
