import Tecnologia from "../tecnologia/Tecnologia"

export default interface Projeto {
	id: number
	nome: string
	descricao: string
	imagens: string[]
	nivel: number
	tipo: string
	destaque: Boolean
	repositorio: string
	tecnologias?: Tecnologia[]
}
