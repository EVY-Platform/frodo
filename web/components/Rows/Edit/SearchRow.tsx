export default function SearchRow() {
	const sharedStyles = "rounded-md text-sm px-3 py-3";
	return (
		<div class="p-2">
			<p>Search row</p>
			<div class="relative">
				<div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
					<img class="h-4" src="/search.svg" alt="Search" />
				</div>
				<input
					type="search"
					id="search"
					class="block w-full p-2 ps-10 text-sm border border-evy-border rounded bg-gray-50 focus-visible:outline-none"
					placeholder=""
					required
				/>
			</div>
		</div>
	);
}
