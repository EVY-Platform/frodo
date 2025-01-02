export default function InlinePickerRow() {
	const sharedStyles = "rounded-md text-sm px-3 py-3";
	return (
		<div class="p-2">
			<p class="pb-2">Inline picker row</p>
			<div class="p-2 flex gap-2">
				<button
					type="button"
					class={`${sharedStyles} bg-evy-light-gray text-black`}
				>
					1 min
				</button>
				<button
					type="button"
					class={`${sharedStyles} bg-evy-gray text-white`}
				>
					2 mins
				</button>
				<button
					type="button"
					class={`${sharedStyles} bg-evy-light-gray text-black`}
				>
					5 min
				</button>
			</div>
		</div>
	);
}
