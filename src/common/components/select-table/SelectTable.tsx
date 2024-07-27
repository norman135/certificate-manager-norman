import Supplier from '../../models/supplier.model';
import User from '../../models/user.model';
import { SearchType } from '../search-items/SearchItems';
import '../table/Table.css';
import './SelectTable.css';

interface SelectTableProps {
	columns: string[];
	items: SearchType[];
	type: 'supplier' | 'user';
	onselect: (item: SearchType) => void;
}

const SelectTable = ({
	columns,
	items,
	type,
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
						{type === 'supplier' ? (
							<>
								<td>
									<input
										type="radio"
										name="select-item"
										onClick={() => onselect(item)}
									/>
								</td>
								<td>{item.name}</td>
								<td>{(item as Supplier).indexValue}</td>
								<td>{(item as Supplier).city}</td>
							</>
						) : (
							<>
								<td>
									<input
										type="select"
										name="select-items"
										onClick={() => onselect(item)}
									/>
								</td>
								<td>{item.name}</td>
								<td>{(item as User).firstName}</td>
								<td>{(item as User).userId}</td>
								<td>{(item as User).department}</td>
								<td>{(item as User).plant}</td>
							</>
						)}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default SelectTable;
