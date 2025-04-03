import Curriculo from "@/src/components/curriculo"
import Principal from "@/src/components/landing/principal"
import Projetos from "@/src/components/projetos/projetos"
import Container from "@/src/components/shared/container"
import { obterProjetos } from "@/src/function/projetos"
import { obterTecnologias } from "@/src/function/tecnologias"

export default async function Home() {
	const tecnologias = await obterTecnologias()
	const projetos = await obterProjetos()

	return (
		<div>
			<Principal tecnologias={tecnologias.destaques} />
			<Container className="py-16 flex flex-col gap-10 items-center">
				<Projetos titulo="Projetos Destaque" projetos={projetos.destaques} />
				<Projetos titulo="Projetos Mobile" projetos={projetos.mobile} />
				<Projetos titulo="Projetos Web" projetos={projetos.web} />
				<Curriculo tecnologias={tecnologias.todas} />
			</Container>
		</div>
	)
}

