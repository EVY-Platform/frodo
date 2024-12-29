import { PageProps } from "$fresh/server.ts";

export default function Panel({ children, border }: PageProps) {
	return (
		<div class="flex items-center justify-center flex-col gap-2">
			{children.map((child) => (
				<div class={`${border} w-full`}>{child}</div>
			))}
		</div>
	);
}
