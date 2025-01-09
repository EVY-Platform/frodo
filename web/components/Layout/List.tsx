import { ComponentChildren } from "preact";

interface Props {
	children: ComponentChildren;
}

export default function List({ children }: Props) {
	return <div class="flex flex-col gap-2">{children}</div>;
}
