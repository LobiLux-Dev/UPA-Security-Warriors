import Image from 'next/image'

interface Props {
	children?: React.ReactNode
	image?: {
		alt: string
		height: number
		src: string
		width: number
	}
	text: string
	textCenter?: boolean
	title: React.ReactNode | string
}

export const Section: React.FC<Props> = ({ children, image, text, textCenter, title }) => {
	return (
		<section className="container mx-auto my-20 px-5">
			<h2 className="text-center font-bold my-10 text-3xl [&>span]:text-secondary">{title}</h2>
			<div className="grid grid-cols-2 items-center">
				{image && (
					<Image
						alt={image.alt}
						className="mx-auto w-0 md:w-fit"
						height={image.height}
						src={image.src}
						width={image.width}
					/>
				)}
				<p className={`${textCenter && 'text-center'} ${image && 'md:col-span-1'} col-span-2 my-10`}>{text}</p>
			</div>
			{children}
		</section>
	)
}
