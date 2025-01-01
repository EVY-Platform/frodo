export default function DropdownRow() {
	return (
		<div class="p-2">
			<p>Dropdown row title</p>
			<select class="w-full text-sm rounded p-2 border border-evy-border focus-visible:outline-none">
				<option value="none">Select an option</option>
			</select>
		</div>
	);
}
