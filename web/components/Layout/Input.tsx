import { PageProps } from "$fresh/server.ts";

export default function Input({ title, identifier }: PageProps) {
	return (
		<form class="grid">
			{title && (
				<label for={identifier} class="block mb-2 capitalize">
					{title}
				</label>
			)}
			<input
				type="text"
				id={identifier}
				class="w-full text-sm rounded p-2 bg-gray-50 border border-evy-border focus:evy-blue focus:border-evy-blue"
				required
			/>
		</form>
	);
}
