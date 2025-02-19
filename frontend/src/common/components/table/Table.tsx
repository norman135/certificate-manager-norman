import { ChangeEvent, ReactNode, useState } from 'react';
import './Table.css';
import CheckMark from './checkmark/CheckMark';
import Radio from './radio/Radio';
import CancelIcon from '../icons/CancelIcon';

interface TableProps<T> {
	columns: string[];
	data: T[];
	selectable?: boolean;
	type?: 'single' | 'multi' | 'delete';
	onSelect?: (selected: number | number[]) => void;
}

const Table = <T extends object | null>({
	columns,
	data,
	selectable = false,
	type = 'single',
	onSelect = (): void => {},
}: TableProps<T>): JSX.Element => {
	const [selectedItems, setSelectedItems] = useState<number[]>([]);

	const addIfNotExist = (index: number): void => {
		if (!selectedItems.includes(index)) {
			const sel = [index];
			selectedItems.forEach((item) => {
				sel.push(item);
			});

			setSelectedItems(sel);
			onSelect(sel);
		}
	};

	const removeIfExists = (index: number): void => {
		if (selectedItems.includes(index)) {
			const selected = selectedItems.filter((item) => item != index);

			setSelectedItems(selected);
			onSelect(selected);
		}
	};

	const selectAll = (e: ChangeEvent<HTMLInputElement>): void => {
		const { checked } = e.target;

		const selected = checked ? data.map((item, index) => index) : [];

		setSelectedItems(selected);
		onSelect(selected);
	};

	const checkMarkAll = (
		<CheckMark
			key="select-all-checkmark"
			onChange={selectAll}
			checked={selectedItems.length > 0 && selectedItems.length === data.length}
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
		const rows: ReactNode[][] = [[]];

		data.forEach((obj: T, index) => {
			const handleCheckMarkChange = (
				e: ChangeEvent<HTMLInputElement>,
			): void => {
				e.target.checked ? addIfNotExist(index) : removeIfExists(index);
			};

			const handleRadioSelect = (): void => {
				onSelect(index);
			};

			const checkMark = (
				<CheckMark
					key={index.toString()}
					onChange={handleCheckMarkChange}
					checked={selectedItems.includes(index)}
				/>
			);

			const radio = (
				<Radio
					key={index.toString()}
					onChange={handleRadioSelect}
				/>
			);

			const cancel = (
				<div
					key={index.toString()}
					onClick={() => {
						onSelect(index);
					}}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							onSelect(index);
						}
					}}
					style={{ cursor: 'pointer' }}
				>
					<CancelIcon
						width={12}
						height={12}
					/>
				</div>
			);

			const cells: ReactNode[] = [];

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
							? row.map((node, rowIndex) => (
									<td key={rowIndex.toString()}>{node}</td>
								))
							: null}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
