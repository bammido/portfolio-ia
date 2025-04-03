export default function Experiencia() {
	return (
		<div className="flex flex-col sm:flex-row lg:flex-col gap-6 items-center bg-black rounded-2xl border-2 border-zinc-800 p-6 justify-around">
			<Item principal="2,5" label="anos de experiência" />
			<Item principal="+4" label="anos de estudando" />
		</div>
	)
}

function Item(props: { principal: string; label: string }) {
	return (
		<div className="flex flex-col items-center">
			<span className="text-red-500 text-3xl font-bold leading-6">{props.principal}</span>
			<span className="text-zinc-400 text-sm text-center">{props.label}</span>
		</div>
	)
}
