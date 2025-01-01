export default function TextAreaRow() {
	return (
		<div class="p-2">
			<p>Text area row title</p>
			<textarea
				id="message"
				rows="4"
				class="block p-2 w-full text-sm rounded-sm border border-evy-border focus-visible:outline-none resize-none"
				placeholder=""
			></textarea>
		</div>
	);
}
