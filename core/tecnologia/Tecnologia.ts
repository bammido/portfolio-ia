import Projeto from "../projeto/Projeto"

export default interface Tecnologia {
	id: number
	nome: string
	descricao: string
	imagem: String
	destaque: Boolean
	projetos?: Projeto[]
}
