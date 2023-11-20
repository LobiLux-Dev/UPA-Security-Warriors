import { Image } from './image'

export interface CardProps {
	children: React.ReactNode
	doubleColumn?: boolean
	title: string
	img?: Image
}

export interface CardContainerProps {
	cards: CardProps[]
	cols?: number
	rows?: number
}
