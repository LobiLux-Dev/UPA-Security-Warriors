import { v4 as uuid } from 'uuid'

interface Props {
	items: string[]
	title: string
}

export const FooterSection: React.FC<Props> = ({ items, title }) => {
	return (
		<section title={title}>
			<h3 className="font-semibold mb-2 text-sm uppercase">{title} </h3>
			<ul className="font-medium text-gray-600">
				{items.map(item => (
					<li key={uuid()}>{item}</li>
				))}
			</ul>
		</section>
	)
}
