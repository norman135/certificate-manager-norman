import { FC } from 'react';
import './Table.css';

interface TableProps {
	columns: string[];
	data: string[][];
}

const Table: FC<TableProps> = ({ columns, data }): JSX.Element => {
	return (
		<table>
			<thead>
				<tr>
					{columns.map((column) => (
						<th key={column}>{column}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data.map((row) => (
					<tr key={row[0]}>
						{row.map((column) => (
							<td key={column}>{column}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
