interface Props {
	title: string
}

export const Title: React.FC<Props> = ({ title }) => {
	return (
		<div className="bg-secondary flex font-bold h-48 items-center justify-center text-6xl text-white">
			<h1>{title}</h1>
		</div>
	)
}
