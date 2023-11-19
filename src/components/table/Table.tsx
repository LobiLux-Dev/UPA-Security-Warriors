import { v4 as uuid } from 'uuid'

import { TableItem } from './'

interface Props {
	headers: string[]
	rows: string[][]
}

export const Table: React.FC<Props> = ({ headers, rows }) => {
	return (
		<table className="w-full sm:max-w-xl mx-auto">
			<thead className="border-b border-black font-bold text-lg bg-secondary">
				<tr>
					{headers.map(header => (
						<TableItem as="th" text={header} key={uuid()} />
					))}
				</tr>
			</thead>
			<tbody className="bg-white text-gray-900">
				{rows.map(row => (
					<tr className="border-b border-gray-400" key={uuid()}>
						{row.map(item => (
							<TableItem text={item} key={uuid()} />
						))}
					</tr>
				))}
			</tbody>
		</table>
	)
}
