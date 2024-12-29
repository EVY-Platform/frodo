import { PageProps } from "$fresh/server.ts";

export default function Panel({ children }: PageProps) {
	return (
		<div class="flex items-center justify-center flex-col">
			{children.map((child) => (
				<div class="border-b w-full">{child}</div>
			))}
		</div>
	);
}
