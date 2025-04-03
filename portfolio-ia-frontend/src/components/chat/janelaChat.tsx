"use client"
import useChat from "@/src/hooks/useChat"
import { IconMessages, IconReload, IconSend } from "@tabler/icons-react"
import { useEffect, useRef, useState } from "react"
import BalaoMensagem from "./balaoMensagem"
import Image from "next/image"

export default function JanelaChat() {
	const { mensagens, pensando, adicionarMensagem, limparMensagens } = useChat()
	const [texto, setTexto] = useState("")
	const fimChatRef = useRef<HTMLDivElement>(null)

	function enviarMensagem() {
		adicionarMensagem(texto)
		setTexto("")
	}

	useEffect(() => {
		fimChatRef.current?.scrollIntoView({ behavior: "smooth" })
	}, [mensagens])

	return (
		<div className="flex flex-col bg-zinc-500 rounded-2xl text-black overflow-hidden">
			<div className="flex justify-between items-center bg-white p-4">
				<h2 className="text-xl fornt-bold">Olá Visitante!</h2>
				<IconReload
					size={24}
					className="text-black cursor-pointer"
					onClick={limparMensagens}
				/>
			</div>
			{mensagens.length === 0 ? (
				<div className="flex flex-col justify-center items-center min-h-[380px] sm:min-h-[450px] max-h-[380px] sm:max-h-[450px]">
					<IconMessages size={230} stroke={0.2} className="text-black/30" />
					<span>Vamos conversar?</span>
				</div>
			) : (
				<div className="flex flex-col p-2  min-h-[380px] sm:min-h-[450px] max-h-[380px] sm:max-h-[450px] overflow-y-scroll">
					{mensagens.map((msg, i) => {
						const mesmoAutor = i > 0 && mensagens[i - 1].autor === msg.autor
						return (
							<BalaoMensagem key={msg.id} mensagem={msg} omitirAutor={mesmoAutor} />
						)
					})}
					{pensando && (
						<Image src="/pensando.gif" alt="pensando" width={50} height={50} />
					)}
					<div ref={fimChatRef} />
				</div>
			)}
			<div className="h-px bg-zinc-400 mt-4" />
			<div className="flex items-center gap-2 p-1 m-4 rounded-full h-10 bg-white">
				<input
					type="text"
					value={texto}
					className="flex-1 bg-transparent h-8 outline-none pl-3"
					onChange={(e) => setTexto(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === "Enter") enviarMensagem()
					}}
				/>
				<button
					className="flex justfy-center p-2 items-center min-h-8 min-w-8 rounded-full bg-red-500"
					onClick={enviarMensagem}
				>
					<IconSend className="text-white" size={18} />
				</button>
			</div>
		</div>
	)
}
