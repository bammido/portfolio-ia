import Image from "next/image"

export default function MiniCV() {
	return (
		<div className="flex-1 flex flex-col-reverse md:flex-row lg:flex-col-reverse xl:flex-row bg-black rounded-2xl border-2 border-zinc-800 p-6 justify-around gap-6">
			<div className="relative min-w-54 min-h-64 w-54 h-64 rounded-3xl overflow-hidden self-center">
				<Image src="/minha-foto.png" fill alt="foto de perfil" />
			</div>
			<div className="flex flex-col gap-5 self-center py-6 items-center md:items-start lg:items-center xl:items-start">
				<div className="flex flex-col items-start">
					<span className="bg-gradient-to-r from-red-500 via-white to-white text-transparent bg-clip-text text-2xl font-bold">
						Bryan Fernandes
					</span>
					<span>Desenvolvedor FullStack</span>
				</div>
				<p className="text-sm text-center md:text-left lg:text-center xl:text-left">
					Sou desenvolvedor com mais de dois anos de experiência. Possuo familiaridade com
					Node, Nest, Next, React, typescript, Docker, e já trabalhei com AWS, azure,
					terraform, react-native, postgreSQL, mySQL, msSQL, mongoDB e firebase. Gosto de
					destacar uma entrega que fiz que ajudou o cliente com o problema de
					Inconsistência financeira que ele tinha, cerca de 6 milhões de reais que eles
					não conseguiam rastrear a origem (quem pagou o que). Eu e meu time criamos um
					sistema com integração com gateway de pagamentos para ter o rastreio e controle
					completo de tudo que foi pago.
				</p>
			</div>
		</div>
	)
}
