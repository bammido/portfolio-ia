import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export interface CarrosselImagensProps {
	imagens: string[]
}

export default function CarrosselImagens(props: CarrosselImagensProps) {
	return (
		<Carousel opts={{ loop: true }} className="w-7/10 md:w-11/12 xl:w-full">
			<CarouselContent>
				{props.imagens.map((img) => (
					<CarouselItem key={img} className="relative h-96 w-full">
						<Image src={img} alt="imagem" fill className="object-cover" />
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	)
}
