interface Props {
	as?: 'td' | 'th'
	text: string
}

export const TableItem: React.FC<Props> = ({ as: Element = 'td', text }) => {
	return (
		<Element className="sm:px-6 sm:py-4" title={text}>
			{text}
		</Element>
	)
}
