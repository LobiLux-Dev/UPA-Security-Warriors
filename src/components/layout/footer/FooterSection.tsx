import { v4 as uuid } from 'uuid'

import type { FooterSectionProps } from '@/interfaces/layout/footer'

export const FooterSection: React.FC<FooterSectionProps> = ({ names, title }) => {
	return (
		<section title={title}>
			<h3 className="font-semibold mb-2 text-sm uppercase">{title} </h3>
			<ul className="font-medium text-gray-600">
				{names.map(name => (
					<li key={uuid()}>{name}</li>
				))}
			</ul>
		</section>
	)
}
