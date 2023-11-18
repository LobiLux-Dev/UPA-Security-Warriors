import Image from 'next/image'

interface Props {
	children: React.ReactNode
	doubleColumn?: boolean
	title: string
	image?: {
		alt: string
		height: number
		src: string
		width: number
	}
}

export const Card: React.FC<Props> = ({ children, doubleColumn, title, image }) => {
	return (
		<div className={`${doubleColumn && 'md:col-span-2'} bg-accent p-6 rounded-lg shadow w-full`}>
			<Image alt="Card Icon" height={50} src="/card-icon.svg" width={50} />
			<h5 className="font-bold mb-2 text-2xl tracking-tight">{title}</h5>
			<div className="mb-3 text-gray-400">{children}</div>
			{image && (
				<Image
					alt={image.alt}
					className="mx-auto w-full md:w-9/12"
					height={image.height}
					src={image.src}
					width={image.width}
				/>
			)}
		</div>
	)
}
