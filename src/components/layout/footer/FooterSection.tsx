import { v4 as uuid } from 'uuid'

interface FooterSectionProps {
	title: string
	items: string[]
}

export const FooterSection = ({ title, items }: FooterSectionProps) => (
	<section>
		<h5>{title}</h5>
		<ul>
			{items.map(item => (
				<li key={uuid()}>{item}</li>
			))}
		</ul>
	</section>
)
