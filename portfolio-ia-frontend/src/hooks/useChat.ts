import { Id } from "@core"
import useLocalStorage from "./useLocalStorage"
import conversar from "../function/chat"
import { useState } from "react"
import { Mensagem } from "../model/Mensagem"

export default function useChat() {
	const [chatId] = useLocalStorage<string>({ chave: "chatId", valorInicial: Id.gerar() })
	const [mensagens, setMensagens] = useLocalStorage<Mensagem[]>({
		chave: "mensagens",
		valorInicial: [],
	})

	const [pensando, setPensando] = useState(false)

	async function adicionarMensagem(texto: string) {
		try {
			setPensando(true)
			const novaMensagem: Mensagem = {
				id: Id.gerar(),
				texto,
				autor: "visitante",
				lado: "direito",
			}

			setMensagens((prev) => [...prev, novaMensagem])

			const resposta = await conversar({ chatId, mensagem: novaMensagem })

			console.log(resposta)

			if (!resposta) return

			const novaResposta: Mensagem = {
				id: Id.gerar(),
				texto: resposta,
				autor: "assistente",
				lado: "esquerdo",
			}

			setMensagens((prev) => [...prev, novaResposta])
		} finally {
			setPensando(false)
		}
	}

	function limparMensagens() {
		setMensagens([])
	}

	return {
		chatId,
		mensagens,
		pensando,
		adicionarMensagem,
		limparMensagens,
	}
}
