import { ReactNode, useState } from 'react';
import './Table.css';
import CertificateSettings from '../../../pages/example-1/certificate-settings/CertificateSettings';
import CancelIcon from '../icons/CancelIcon';

interface TableProps<T> {
	columns: string[];
	data: T[];
	selectable?: boolean;
	type?: 'single' | 'multi' | 'delete';
	onSelect?: (selected: number | number[]) => void;
}

const Table = <T extends {} | null>({
	columns,
	data,
	selectable = false,
	type = 'single',
	onSelect = () => {},
}: TableProps<T>): JSX.Element => {
	let selectedItem: number | null;
	let selectedItems: number[] | null;

	const checkMarkAll = (
		<input
			type="checkbox"
			name="select-table"
			onChange={() => {}}
		/>
	);

	let columnData: ReactNode[] = [];

	if (selectable) {
		columnData = type === 'single' ? [''] : [checkMarkAll];
		columns.forEach((column) => columnData.push(column));
	} else {
		columns.forEach((column) => columnData.push(column));
	}

	const generateRows = (): ReactNode[][] => {
		let rows: ReactNode[][] = [[]];

		data.forEach((obj: T, index) => {
			const checkMark = (
				<input
					type="checkbox"
					name="select-table"
					onChange={() => {}}
				/>
			);

			const radio = (
				<input
					type="radio"
					name="select-table"
					onChange={() => {
						onSelect(index);
					}}
				/>
			);

			const cancel = (
				<div onClick={() => {}}>
					<CancelIcon
						width={12}
						height={12}
					/>
				</div>
			);

			let cells: ReactNode[] = [];

			if (selectable) {
				cells.push(
					type === 'single' ? radio : type === 'multi' ? [checkMark] : [cancel],
				);
			}

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
