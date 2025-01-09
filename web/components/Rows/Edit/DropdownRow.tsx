import Input from "../../../components/Layout/Input.tsx";

export default function DropdownRow() {
	return (
		<div class="p-2">
			<p class="pb-2">Dropdown row</p>
			<div class="relative">
				<Input />
				<div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
					<img class="h-4" src="/arrow_down.svg" alt="Select" />
				</div>
			</div>
		</div>
	);
}
