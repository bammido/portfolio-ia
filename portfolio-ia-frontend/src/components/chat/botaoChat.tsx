import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import Image from "next/image"
import JanelaChat from "./janelaChat"

export default function BotaoChat() {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<div className="fixed bottom-5 right-5 cursor-pointer">
					<Image src="/chat.svg" alt="botão chat" width={50} height={50} />
				</div>
			</PopoverTrigger>
			<PopoverContent
				side="top"
				align="end"
				sideOffset={10}
				className="w-[380px] sm:w-[500px]"
				style={{ backgroundColor: "transparent", border: "none" }}
			>
				<JanelaChat />
			</PopoverContent>
		</Popover>
	)
}
