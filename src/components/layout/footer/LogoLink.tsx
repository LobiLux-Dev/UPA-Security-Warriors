import Image from 'next/image'

interface LogoLinkProps {
	href: string
	src: string
	alt: string
	height: number
	width: number
}

export const LogoLink = ({ href, src, alt, height, width }: LogoLinkProps) => (
	<a href={href} target="_blank">
		<Image alt={alt} height={height} src={src} width={width} />
	</a>
)
