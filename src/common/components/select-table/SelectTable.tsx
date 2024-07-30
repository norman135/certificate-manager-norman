import Table from '../table/Table';
import '../table/Table.css';
import './SelectTable.css';

interface SelectTableProps<T> {
	columns: string[];
	items: T[];
	type: 'single' | 'multi';
	onSelect: (arg0: any) => void;
}

const SelectTable = <T extends {}>({
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

		const handleSelect = () => onSelect(item);

		values.unshift(
			type === 'single' ? (
				<input
					name="select-items"
					type="radio"
					onClick={handleSelect}
				/>
			) : (
				<input
					name="select-items"
					type="checkbox"
					onClick={handleSelect}
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
