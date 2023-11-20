import { Image } from './image'

export interface SectionProps {
	children?: React.ReactNode
	img?: Image
	text: string
	textCenter?: boolean
	title: React.ReactNode | string
}
