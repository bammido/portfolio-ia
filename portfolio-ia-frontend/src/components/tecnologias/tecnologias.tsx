import { Tecnologia } from "@core"
import Image from "next/image"

interface TecnologiasProps {
	tecnologias: Tecnologia[]
	tamanhoMenor?: boolean
}

export default function Tecnologias(props: TecnologiasProps) {
	return props.tecnologias ? (
		<div className="flex justify-center gap-4 flex-wrap w-4/5">
			{props.tecnologias.map((tec) => (
				<div key={tec.id} className="flex flex-col items-center gap-1">
					<span
						className={`
							relative h-11 w-11 rounded-xl overflow-hidden
							${!props.tamanhoMenor && "sm:h-16 sm:w-16"}
						`}
					>
						<Image src={tec.imagem} alt={tec.nome} fill className="object-contain" />
					</span>
				</div>
			))}
		</div>
	) : null
}
