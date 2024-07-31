import { ChangeEvent, ReactNode, useState } from 'react';
import './Table.css';
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
	const [selectedItems, setSelectedItems] = useState<number[]>([]);

	const addIfNotExist = (index: number) => {
		if (!selectedItems.includes(index)) {
			let sel = [index];
			selectedItems.forEach((index) => {
				sel.push(index);
			});
			setSelectedItems(sel);
			onSelect(sel);
		}
	};

	const removeIfExists = (index: number) => {
		if (selectedItems.includes(index)) {
			const selected = selectedItems.filter((item) => item != index);
			setSelectedItems(selected);
			onSelect(selected);
		}
	};

	const selectAll = (e: ChangeEvent<HTMLInputElement>) => {
		const checkboxes = document.querySelectorAll<HTMLInputElement>(
			'input[name=select-table]',
		);

		const checked = e.target.checked;

		checkboxes.forEach((checkbox) => {
			checkbox.checked = checked;
		});

		const selected = checked ? data.map((item, index) => index) : [];
		setSelectedItems(selected);
		onSelect(selected);
	};

	const checkMarkAll = (
		<input
			type="checkbox"
			onChange={selectAll}
		/>
	);

	let columnData: ReactNode[] = [];

	if (selectable) {
		columnData =
			type === 'single' ? [''] : type === 'multi' ? [checkMarkAll] : [];
		columns.forEach((column) => columnData.push(column));
	} else {
		columns.forEach((column) => columnData.push(column));
	}

	const generateRows = (): ReactNode[][] => {
		let rows: ReactNode[][] = [[]];

		data.forEach((obj: T, index) => {
			const checkMark = (
				<input
					key={index.toString()}
					type="checkbox"
					name="select-table"
					onChange={(e) => {
						e.target.checked ? addIfNotExist(index) : removeIfExists(index);
					}}
				/>
			);

			const radio = (
				<input
					key={index.toString()}
					type="radio"
					name="select-table"
					onChange={() => {
						onSelect(index);
					}}
				/>
			);

			const cancel = (
				<div
					key={index.toString()}
					onClick={() => {
						onSelect(index);
					}}
					style={{ cursor: 'pointer' }}
				>
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
				{generateRows().map((row, index) => (
					<tr key={index.toString()}>
						{row
							? row.map((node, index) => <td key={index.toString()}>{node}</td>)
							: null}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
