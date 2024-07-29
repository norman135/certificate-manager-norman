import Table from '../table/Table';
import '../table/Table.css';
import './SelectTable.css';

interface SelectTableProps<T> {
	columns: string[];
	items: T[];
	type: 'single' | 'multi';
	onSelect: (item: T) => void;
}

const SelectTable = <T extends { [key: string]: any }>({
	columns,
	items,
	type,
	onSelect,
}: SelectTableProps<T>): JSX.Element => {
	columns.unshift('');
	const tableData = items.map((item) => {
		const values = Object.keys(item)
			.filter((key) => key !== 'id')
			.map((key) => (item as any)[key]);

		values.unshift(
			type === 'single' ? (
				<input
					name="select-items"
					type="radio"
					onClick={() => onSelect(item)}
				/>
			) : (
				<input
					name="select-items"
					type="select"
					onClick={() => onSelect(item)}
				/>
			),
		);
		return values;
	});

	return (
		<Table
			columns={columns}
			data={tableData}
		/>
	);
};

export default SelectTable;
