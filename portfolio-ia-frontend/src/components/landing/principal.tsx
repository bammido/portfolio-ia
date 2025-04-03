import { Tecnologia } from "@core"
import Cabecalho from "../shared/cabecalho"
import Tecnologias from "../tecnologias/tecnologias"

export interface PrincipalProps {
	tecnologias: Tecnologia[]
}

export default function Principal(props: PrincipalProps) {
	return (
		<div className="flex flex-col items-center justify-center h-[500px] bg-[url('/principal.png')] bg-cover bg-center">
			<Cabecalho />
			<div className="flex-1 flex flex-col justify-center items-center w-full">
				<div className="bg-black/60 p-6 rounded-2xl flex flex-col justify-center items-center">
					<h1 className="flex items-center gap-2">
						<span className="w-2 h-2 rounded-full bg-red-500" />
						<span className="text-3xl sm:text-5xl text-yellow-400 font-bold text-center text-center">
							Bryan Fernandes
						</span>
						<span className="w-2 h-2 rounded-full bg-red-500" />
					</h1>
					<h2 className="text-zinc-500">Desenvolvedor FullStack</h2>
					<Tecnologias tecnologias={props.tecnologias} />
				</div>
			</div>
		</div>
	)
}
