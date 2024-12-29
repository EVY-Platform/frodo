import Input from "../Layout/Input.tsx";

export default function InputListRow() {
	return (
		<div class="p-2">
			<p class="mb-2">Input list row title</p>
			<Input id="title" />
		</div>
	);
}

export const configuration = [
	{ id: "title", type: "text" },
	{ id: "data", type: "text" },
];
