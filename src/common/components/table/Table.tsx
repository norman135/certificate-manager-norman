import { ReactNode } from 'react';
import './Table.css';
import CertificateSettings from '../../../pages/example-1/certificate-settings/CertificateSettings';

interface TableProps<T> {
	columns: string[];
	data: T[];
	selectable?: boolean;
	type?: 'single' | 'multi';
	onSelect?: () => void;
}

const Table = <T extends {} | null>({
	columns,
	data,
	selectable = false,
	type = 'single',
	onSelect = () => {},
}: TableProps<T>): JSX.Element => {
	const checkMark = (
		<input
			type="checkbox"
			name="select-table"
		/>
	);
	const radio = (
		<input
			type="radio"
			name="select-table"
		/>
	);

	let columnData: ReactNode[] = [];

	if (selectable) {
		columnData = type === 'single' ? [''] : [checkMark];
		columns.forEach((column) => columnData.push(column));
	} else {
		columns.forEach((column) => columnData.push(column));
	}

	const generateRows = (): ReactNode[][] => {
		let rows: ReactNode[][] = [[]];

		data.forEach((obj: T) => {
			let cells: ReactNode[] = [];

			const row = Object.values(obj!);
			row.forEach((cell) => {
				cells.push(cell as ReactNode);
			});
			rows.push(cells);
		});

		return rows;
	};

	return (
		<table>
			<thead>
				<tr>
					{columnData.map((column, index) => (
						<th key={index.toString()}>{column}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{generateRows().map((row) => (
					<tr>{row ? row.map((node) => <td>{node}</td>) : null}</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
