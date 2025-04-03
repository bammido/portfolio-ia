import { Projeto, Tipo } from "@core"
import { httpGet } from "./api"

export async function obterProjetos() {
	const projetos: Projeto[] = await httpGet("/projetos")

	return {
		todos: projetos,
		get mobile() {
			return projetos.filter((proj) => proj.tipo === Tipo.mobile)
		},
		get web() {
			return projetos.filter((proj) => proj.tipo === Tipo.web)
		},
		get destaques() {
			return projetos.filter((proj) => proj.destaque)
		},
	}
}

export async function obterProjeto({ id }: { id: string }) {
	const projeto: Projeto = await httpGet(`/projetos/${id}`)

	return projeto
}
