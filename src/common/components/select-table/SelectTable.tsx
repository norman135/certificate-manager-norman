import Supplier from '../../models/supplier.model';
import '../table/Table.css';
import './SelectTable.css';

interface SelectTableProps {
	columns: string[];
	items: Supplier[];
	onselect: (supplier: Supplier) => void;
}

const SelectTable = ({
	columns,
	items,
	onselect,
}: SelectTableProps): JSX.Element => {
	return (
		<table>
			<thead>
				<tr>
					<th key=""></th>
					{columns.map((column) => (
						<th key={column}>{column}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{items.map((item) => (
					<tr
						className="select-table-row"
						key={item.name}
					>
						<td>
							<input
								type="radio"
								name="select-item"
								onClick={() => onselect(item)}
							/>
						</td>
						<td>{item.name}</td>
						<td>{item.index}</td>
						<td>{item.city}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default SelectTable;
