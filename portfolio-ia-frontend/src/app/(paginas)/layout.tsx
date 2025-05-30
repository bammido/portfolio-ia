import BotaoChat from "@/src/components/chat/botaoChat"

export default function Layout(props: { children: React.ReactNode }) {
	return (
		<div>
			{props.children}
			<BotaoChat />
		</div>
	)
}
