import Readme from "@/src/components/projetos/readme"
import Cabecalho from "@/src/components/shared/cabecalho"
import CarrosselImagens from "@/src/components/shared/carrosselImagens"
import Container from "@/src/components/shared/container"
import Tecnologias from "@/src/components/tecnologias/tecnologias"
import { obterReadme } from "@/src/function/github"
import { obterProjeto } from "@/src/function/projetos"

export default async function PaginaProjeto(props: { params: Promise<{ id: string }> }) {
	const { id } = await props.params
	const projeto = await obterProjeto({ id })

	if (!projeto) return
	const readme = await obterReadme({ repoUrl: projeto.repositorio })

	return (
		<div className="bg-black">
			<Cabecalho />
			<Container className="py-7 flex flex-col items-center gap-10">
				<h1 className="text-3xl font-bold self-start">{projeto.nome}</h1>
				<CarrosselImagens imagens={projeto.imagens.slice(1)} />
				<Tecnologias tecnologias={projeto.tecnologias!} tamanhoMenor={true} />
				<Readme markdown={readme} />
			</Container>
		</div>
	)
}
