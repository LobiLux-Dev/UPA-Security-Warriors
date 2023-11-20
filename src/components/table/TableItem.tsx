import type TableItemProps from '@/interfaces/table'

export const TableItem: React.FC<TableItemProps> = ({ as: Element = 'td', text }) => {
	return (
		<Element className="sm:px-6 sm:py-4" title={text}>
			{text}
		</Element>
	)
}
