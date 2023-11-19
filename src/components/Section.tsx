interface Props {
	children?: React.ReactNode
	text: string
	textCenter?: boolean
	title: React.ReactNode | string
}

export const Section: React.FC<Props> = ({ children, text, textCenter, title }) => {
	return (
		<section className="container mx-auto my-20 px-5">
			<h2 className="text-center font-bold my-10 text-3xl [&>span]:text-secondary">{title}</h2>
			<p className={`${textCenter && 'text-center'} my-10`}>{text}</p>
			{children}
		</section>
	)
}
