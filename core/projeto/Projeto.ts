import Tecnologia from "../tecnologia/Tecnologia"

export default interface Projeto {
	id: number
	nome: String
	descricao: String
	imagens: String[]
	nivel: number
	tipo: string
	destaque: Boolean
	repositorio: String
	tecnologias?: Tecnologia[]
}
