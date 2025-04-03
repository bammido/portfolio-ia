import { Mensagem } from "@/src/model/Mensagem"
import ConteudoMD from "../shared/conteudoMD"
import Image from "next/image"

export interface BalaoMensagemProps {
	mensagem: Mensagem
	omitirAutor?: boolean
}

export default function BalaoMensagem(props: BalaoMensagemProps) {
	return (
		<>
			{props.mensagem.lado === "direito" && (
				<BalaoDireito mensagem={props.mensagem} omitirAutor={props.omitirAutor} />
			)}
			{props.mensagem.lado === "esquerdo" && (
				<BalaoEsquerdo mensagem={props.mensagem} omitirAutor={props.omitirAutor} />
			)}
		</>
	)
}

function BalaoDireito(props: BalaoMensagemProps) {
	return (
		<div className={`flex flex-col items-end ${props.omitirAutor && "pr-2"}`}>
			{!props.omitirAutor && (
				<span className="text-xs text-zinc-900 font-bold">{props.mensagem.autor}</span>
			)}
			<div className="bg-red-700 text-white px-7 py-4 sm:w-80 rounded-l-3xl rounded-br-3xl">
				<ConteudoMD markdown={props.mensagem.texto} />
			</div>
		</div>
	)
}

function BalaoEsquerdo(props: BalaoMensagemProps) {
	return (
		<div className="flex gap-4">
			{!props.omitirAutor && (
				<Image src="/chat.svg" alt="Assistente" width={40} height={40} />
			)}
			<div className={`flex flex-col ${props.omitirAutor && "pl-16"}`}>
				{!props.omitirAutor && (
					<span className="text-xs text-zinc-900 font-bold">{props.mensagem.autor}</span>
				)}
				<div className="bg-black text-white px-7 py-4 sm:w-80 rounded-r-3xl rounded-bl-3xl">
					<ConteudoMD markdown={props.mensagem.texto} />
				</div>
			</div>
		</div>
	)
}
