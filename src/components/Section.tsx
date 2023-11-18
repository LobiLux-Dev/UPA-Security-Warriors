interface Props {
	text: string
	title: string
}

export const Section: React.FC<Props> = ({ text, title }) => {
	return (
		<section className="container mx-auto my-20 px-5">
			<h2 className="text-center font-bold my-10 text-3xl">{title}</h2>
			<p>{text}</p>
		</section>
	)
}
