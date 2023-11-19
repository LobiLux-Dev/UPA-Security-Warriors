import Image from 'next/image'

interface Props {
	image?: {
		alt: string
		height: number
		src: string
		width: number
	}
	title: string
}

export const Title: React.FC<Props> = ({ image, title }) => {
	return (
		<>
			{image ? (
				<Image alt={image.alt} className="w-full" height={image.height} src={image.src} width={image.width} />
			) : (
				<div className="bg-secondary flex font-bold h-48 items-center justify-center text-6xl text-white">
					<h1>{title}</h1>
				</div>
			)}
		</>
	)
}
