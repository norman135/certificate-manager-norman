import { FC, ReactNode } from 'react';
import './Table.css';

interface TableProps {
	columns: string[];
	data: ReactNode[][];
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
				{data.map((row, index) => (
					<tr key={index.toString()}>
						{row.map((column, index) => (
							<td key={index.toString()}>{column}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
