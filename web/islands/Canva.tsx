export default function Canva() {
	return (
		<div
			class="select-none drag-none overflow-scroll flex h-[calc(100vh-92px)]"
			style={{
				"&::-webkit-scrollbar": "hidden",
				"-ms-overflow-style": "none",
				"scrollbar-width": "none",
			}}
		>
			<img
				src="/phone.svg"
				alt="phone"
				class="px-24 h-[calc(100vh-92px)]"
			/>
			<img
				src="/phone.svg"
				alt="phone"
				class="px-24 h-[calc(100vh-92px)]"
			/>
			<img
				src="/phone.svg"
				alt="phone"
				class="px-24 h-[calc(100vh-92px)]"
			/>
		</div>
	);
}

/*
const rows = useSignal([]);

const draggableChildren = rows.value.map((Row) => (
	<Draggable>
		<Row />
	</Draggable>
));


<div class="relative px-24 h-[calc(100vh-92px)]">
	<img src="/phone.svg" alt="phone" />
	<div
		class={`m-auto rounded-3xl -mt-[calc(100vh-180px)] w-[calc(1/2.7*100vh)] h-[calc(100vh-220px)] ${overflowStyles}`}
	>
		<List>{draggableChildren}</List>
	</div>
</div> */
