import { ChangeEvent, FC, useEffect, useState } from 'react';
import './Lookup.css';
import TextInput from '../input/TextInput';
import CancelIcon from '../icons/CancelIcon';
import Button from '../button/Button';
import Supplier from '../../models/supplier.model';
import getAllSuppliers, { searchSuppliers } from '../../db/supplier-service';
import SelectTable from '../select-table/SelectTable';
import { initialSupplier } from '../../utils/supplier.utils';

interface SupplierLookupProps {
	closeSearch: () => void;
	selectSupplier: (supplier: Supplier) => void;
}

const SupplierLookup: FC<SupplierLookupProps> = ({
	closeSearch,
	selectSupplier,
}): JSX.Element => {
	const [suppliersBuffer, setSuppliersBuffer] = useState<Supplier[]>([]);
	const [supplierInfo, setSupplierInfo] = useState<Supplier>(initialSupplier);
	const [selectedSupplier, setSelectedSupplier] =
		useState<Supplier>(initialSupplier);

	useEffect(() => {
		getAllSuppliers().then((data) => {
			setSuppliersBuffer(data);
		});
	}, []);

	const SupplierSearch = async (): Promise<void> => {
		const result = await searchSuppliers({
			name: supplierInfo.name,
			index: supplierInfo.indexValue,
			city: supplierInfo.city,
		});

		setSuppliersBuffer(result);
	};

	const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSupplierInfo((prev) => ({
			...prev,
			name: e.target.value,
		}));
	};
	const handleIndexChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSupplierInfo((prev) => ({
			...prev,
			indexValue: e.target.value,
		}));
	};
	const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSupplierInfo((prev) => ({
			...prev,
			city: e.target.value,
		}));
	};

	const clearFields = () => {
		setSupplierInfo(initialSupplier);
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
							value={supplierInfo.name}
							onchange={handleNameChange}
						/>
						<TextInput
							label="Supplier Index"
							value={(supplierInfo as Supplier).indexValue}
							onchange={handleIndexChange}
						/>
						<TextInput
							label="City"
							value={(supplierInfo as Supplier).city}
							onchange={handleCityChange}
						/>
					</div>
					<Button
						name="Search"
						color="white"
						bg="#265b7a"
						type="button"
						to=""
						onClick={SupplierSearch}
					/>
					<Button
						name="Reset"
						color="black"
						bg="#f6f6f6"
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
						type="single"
						onSelect={setSelectedSupplier}
					/>
					<Button
						name="Save"
						color="white"
						bg="#f0cf93"
						type="button"
						to=""
						onClick={() => {
							selectSupplier(selectedSupplier);
							closeSearch();
						}}
						disabled={selectedSupplier === initialSupplier}
					/>
					<Button
						name="Cancel"
						color="black"
						bg="#f6f6f6"
						type="button"
						to=""
						onClick={closeSearch}
					/>
				</div>
			</div>
		</div>
	);
};

export default SupplierLookup;
