export default function SelectPhotoRow() {
	return (
		<div class="p-2">
			<p>Select photo row</p>
			<div class="rounded-md px-8 py-8 border border-evy-border text-sm">
				<div class="flex justify-center text-center flex-col">
					<img class="h-4" src="/add_photo.svg" alt="Add photo" />
					<p>Content text</p>
				</div>
			</div>
			<p class="text-evy-light text-sm">Subtitle text</p>
		</div>
	);
}
