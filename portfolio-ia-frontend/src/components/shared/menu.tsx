"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Menu() {
	const caminho = usePathname()

	return (
		<nav className="flex gap-6">
			<MenuItem href="/" selecionado={caminho === "/"}>
				Inicio
			</MenuItem>
			<MenuItem href="/projetos/1" selecionado={caminho.includes("projetos")}>
				Projetos
			</MenuItem>
			<MenuItem href="https://wa.me/5584996495206" selecionado={false}>
				Contato
			</MenuItem>
		</nav>
	)
}

function MenuItem(props: {
	href: string
	children: React.ReactNode
	selecionado: boolean
	novaAba?: boolean
}) {
	return (
		<Link href={props.href} target={props.novaAba ? "_blank" : "_self"}>
			<span
				className={`flex items-center gap-2 text-sm border-red-600 hover:text-white ${
					props.selecionado ? "border-b-4 text-white" : "text-zinc-400"
				}`}
			>
				{props.children}
			</span>
		</Link>
	)
}
