import ConteudoMD from "../shared/conteudoMD"

export interface ReadmeProps {
	markdown: string
}

export default function Readme(props: ReadmeProps) {
	return (
		<div className="flex flex-col items-stretch p-6 bg-black border border-zinc-800 rounded-2xl gap-6">
			<h1 className="font-bold">README</h1>
			<div className="prose prose-zinc prose-invert">
				<ConteudoMD markdown={props.markdown} />
			</div>
		</div>
	)
}
