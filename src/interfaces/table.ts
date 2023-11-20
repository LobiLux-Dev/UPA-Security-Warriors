export interface TableProps {
	columns: string[]
	rows: string[][]
}

export default interface TableItemProps {
	as?: 'td' | 'th'
	text: string
}
