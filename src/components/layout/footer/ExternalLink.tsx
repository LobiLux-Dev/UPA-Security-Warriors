import Image from 'next/image'

interface Props {
	alt: string
	href: string
	src: string
	text: string
}

export const ExternalLink: React.FC<Props> = ({ alt, href, src, text }) => {
	return (
		<span className="block" title={`${text} ${alt}`}>
			<a href={href} target="_blank">
				{text} <Image alt={alt} className="inline" height={60} src={src} width={60} />
			</a>
		</span>
	)
}
