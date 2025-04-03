import Link from "next/link"
import Container from "./container"
import Image from "next/image"
import Menu from "./menu"

export default function Cabecalho() {
	return (
		<header className="flex items-center h-16 w-full bg-black/50">
			<Container className="flex-1 flex justify-between items-center">
				<div className="flex gap-10 items-center">
					<Link href="/" className="hidden sm:block">
						<Image src="/logo.png" alt="Logo" width={80} height={80} />
					</Link>
					<Menu />
				</div>
				<div className="hidden sm:block">
					<Link
						target="_blank"
						href="https://www.linkedin.com/in/bryan-fernandes-de-oliveira/"
						className="bg-red-500 rounded-full px-7 py-1 text-sm font-bold"
					>
						Perfil
					</Link>
				</div>
			</Container>
		</header>
	)
}
