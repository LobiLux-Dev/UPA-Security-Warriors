import { v4 as uuid } from 'uuid'

import { TableItem } from './'
import type { TableProps } from '@/interfaces/table'

export const Table: React.FC<TableProps> = ({ columns, rows }) => {
	return (
		<table className="w-full sm:max-w-xl mx-auto">
			<thead className="border-b border-black font-bold text-lg bg-secondary">
				<tr>
					{columns.map(column => (
						<TableItem as="th" text={column} key={uuid()} />
					))}
				</tr>
			</thead>
			<tbody className="bg-white text-gray-900">
				{rows.map(row => (
					<tr className="border-b border-gray-400" key={uuid()}>
						{row.map(data => (
							<TableItem text={data} key={uuid()} />
						))}
					</tr>
				))}
			</tbody>
		</table>
	)
}
