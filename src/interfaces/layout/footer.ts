import type { Image } from '../image'

export interface ExternalLinkProps {
	href: string
	img: Image
	text: string
}

export interface FooterSectionProps {
	names: string[]
	title: string
}

export interface LogoLinkProps {
	href: string
	img: Image
}
