import { ReactNode } from 'react';
import './Table.css';

interface TableProps<T> {
	columns: string[];
	data: T[][];
}

const Table = <T extends {}>({ columns, data }: TableProps<T>): JSX.Element => {
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
				{data.map((row, rowIndex) => (
					<tr key={rowIndex.toString()}>
						{row.map((column, colIndex) => (
							<td key={colIndex.toString()}>{column as ReactNode}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
