import { Projeto } from "@core"
import ItemProjeto from "./itemProjeto"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"

export interface ProjetosProps {
	titulo: string
	projetos: Projeto[]
}

export default function Projetos(props: ProjetosProps) {
	return props.projetos.length ? (
		<div className="flex flex-col items-center sm:items-start w-7/10 md:w-11/12 xl:w-full gap-5">
			<h3 className="2-xl font-bold text-white/70 self-center">{props.titulo}</h3>
			<Carousel
				opts={{
					align: "center",
					loop: true,
				}}
				className="w-full"
			>
				<CarouselContent className="flex">
					{props.projetos.map((proj) => (
						<CarouselItem
							key={proj.id}
							className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
						>
							<ItemProjeto projeto={proj} />
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	) : null
}
