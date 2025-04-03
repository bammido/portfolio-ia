import { Tecnologia } from "@core"

interface TecnologiasTrabalhadasProps {
	tecnologias: Tecnologia[]
}

export default function TecnologiasTrabalhadas(props: TecnologiasTrabalhadasProps) {
	return props.tecnologias ? (
		<div className="flex justify-center items-center p-6 w-full lg:w-72 bg-black rounded-2xl border-2 border-zinc-800">
			<div className="flex justify-center items-center flex-wrap gap-x-6">
				{props.tecnologias.map((tec) => (
					<div key={tec.id}>
						<span className="text-red-500 font-bold">#</span>
						<span>{tec.nome}</span>
					</div>
				))}
			</div>
		</div>
	) : null
}
