import Projeto from "../projeto/Projeto"

export default interface Tecnologia {
	id: number
	nome: string
	descricao: string
	imagem: string
	destaque: Boolean
	projetos?: Projeto[]
}
