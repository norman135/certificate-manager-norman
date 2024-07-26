import { ChangeEvent, FC, useEffect, useState } from 'react';
import './SearchItems.css';
import TextInput from '../input/TextInput';
import CancelIcon from '../icons/CancelIcon';
import Button from '../button/Button';
import Table from '../table/Table';
import Supplier from '../../models/supplier.model';
import getAllSuppliers from '../../db/supplier-service';
import SelectTable from '../select-table/SelectTable';
import initialCertificate from '../../utils/certificate.utils';

interface SearchItemsProps {
	closeSearch: () => void;
	selectItem: (supplier: Supplier) => void;
}

const SearchItems: FC<SearchItemsProps> = ({
	closeSearch,
	selectItem,
}): JSX.Element => {
	const [suppliersBuffer, setSuppliersBuffer] = useState<Supplier[]>([]);
	const [name, setName] = useState<string>('');
	const [index, setIndex] = useState<string>('');
	const [city, setCity] = useState<string>('');
	const [selectedSupplier, setSelectedSupplier] = useState<Supplier>(
		initialCertificate.supplier,
	);
	let suppliersArray: Supplier[] = [];

	useEffect(() => {
		const getSuppliers = async () => {
			suppliersArray = await getAllSuppliers();
			// setSuppliersBuffer(suppliersArray);
		};

		getSuppliers();
	}, [suppliersArray]);

	const searchSuppliers = (): void => {
		const _suppliers: Supplier[] = [];

		for (let i = 0; i < suppliersArray.length; i++) {
			let supplier = suppliersArray[i];
			if (
				supplier.name.includes(name, 0) &&
				(!index || supplier.index === parseInt(index)) &&
				supplier.city.includes(city, 0)
			) {
				_suppliers.push(supplier);
			}
		}

		setSuppliersBuffer(_suppliers);
	};

	const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};

	const handleIndexChange = (e: ChangeEvent<HTMLInputElement>) => {
		setIndex(e.target.value);
	};

	const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
		setCity(e.target.value);
	};

	const clearFields = () => {
		setName('');
		setIndex('');
		setCity('');
	};

	return (
		<div className="search-container">
			<div className="search-top-bar">
				<p className="search-top-bar-title">Search for Suppliers</p>
				<button
					className="search-top-bar-close"
					onClick={closeSearch}
				>
					<CancelIcon
						width={10}
						height={10}
					/>
				</button>
			</div>
			<div className="search-main-content">
				<div className="search-criteria">
					<div className="expand-bar">Search criteria</div>
					<div className="search-criteria-input-area">
						<TextInput
							label="Supplier Name"
							value={name}
							onchange={handleNameChange}
						/>
						<TextInput
							label="Supplier Index"
							value={index}
							onchange={handleIndexChange}
						/>
						<TextInput
							label="City"
							value={city}
							onchange={handleCityChange}
						/>
					</div>
					<Button
						name="Search"
						color="white"
						bg="rgb(0, 44, 57)"
						type="button"
						to=""
						onClick={searchSuppliers}
					/>
					<Button
						name="Reset"
						color="black"
						bg="rgb(226, 226, 226)"
						type="button"
						to=""
						onClick={clearFields}
					/>
				</div>
				<div className="search-list">
					<div className="expand-bar">Supplier list</div>
					<SelectTable
						columns={['Supplier name', 'Supplier index', 'City']}
						items={suppliersBuffer}
						onselect={setSelectedSupplier}
					/>
					<Button
						name="Save"
						color="white"
						bg="rgb(255, 177, 75)"
						type="button"
						to=""
						onClick={() => {
							selectItem(selectedSupplier);
							closeSearch();
						}}
					/>
					<Button
						name="Cancel"
						color="black"
						bg="rgb(226, 226, 226)"
						type="button"
						to=""
						onClick={closeSearch}
					/>
				</div>
			</div>
		</div>
	);
};

export default SearchItems;
