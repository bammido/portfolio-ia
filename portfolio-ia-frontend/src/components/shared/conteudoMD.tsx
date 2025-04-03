import Markdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import remarkGfm from "remark-gfm"

export interface conteudoMDProps {
	markdown: string
}

export default function ConteudoMD(props: conteudoMDProps) {
	return (
		<div>
			<Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} skipHtml={false}>
				{props.markdown}
			</Markdown>
		</div>
	)
}
