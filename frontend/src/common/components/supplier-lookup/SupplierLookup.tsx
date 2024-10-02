import { ChangeEvent, FC, useEffect, useState } from 'react';
import './Lookup.css';
import TextInput from '../input/TextInput';
import CancelIcon from '../icons/CancelIcon';
import Button from '../button/Button';
import Supplier from '../../models/supplier.model';
import { searchSuppliers } from '../../api/services/supplier-service';
import { initialSupplier } from '../../utils/supplier.utils';
import {
	toSelectedLocale,
	useLanguageContext,
} from '../../contexts/language/Language';
import Table from '../table/Table';

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

	const { language } = useLanguageContext();

	const supplierSearch = async (): Promise<void> => {
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

	const handleSelect = (index: number | number[]) => {
		setSelectedSupplier(suppliersBuffer[index as number]);
	};

	const handleSave = () => {
		selectSupplier(selectedSupplier);
		closeSearch();
	};

	return (
		<div className="search-container">
			<div className="search-top-bar">
				<p className="search-top-bar-title">
					{toSelectedLocale('searchSuppliers', language)}
				</p>
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
					<div className="expand-bar">
						{toSelectedLocale('searchCriteria', language)}
					</div>
					<div className="search-criteria-input-area">
						<TextInput
							label={toSelectedLocale('supplierName', language)}
							value={supplierInfo.name}
							onchange={handleNameChange}
						/>
						<TextInput
							label={toSelectedLocale('supplierIndex', language)}
							value={supplierInfo.indexValue}
							onchange={handleIndexChange}
						/>
						<TextInput
							label={toSelectedLocale('city', language)}
							value={supplierInfo.city}
							onchange={handleCityChange}
						/>
					</div>
					<Button
						name={toSelectedLocale('search', language)}
						color="white"
						bg="#265b7a"
						type="button"
						to=""
						onClick={supplierSearch}
					/>
					<Button
						name={toSelectedLocale('reset', language)}
						color="black"
						bg="#f6f6f6"
						type="button"
						to=""
						onClick={clearFields}
					/>
				</div>
				<div className="search-list">
					<div className="expand-bar">
						{toSelectedLocale('supplierList', language)}
					</div>
					<Table
						columns={[
							toSelectedLocale('supplierName', language),
							toSelectedLocale('supplierIndex', language),
							toSelectedLocale('city', language),
						]}
						data={suppliersBuffer.map((supplier) => ({
							name: supplier.name,
							index: supplier.indexValue,
							city: supplier.city,
						}))}
						selectable={true}
						type="single"
						onSelect={handleSelect}
					/>
					<Button
						name={toSelectedLocale('save', language)}
						color="white"
						bg="#f0cf93"
						type="button"
						to=""
						onClick={handleSave}
						disabled={selectedSupplier === initialSupplier}
					/>
					<Button
						name={toSelectedLocale('cancel', language)}
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
