import { ChangeEvent, FC, useEffect, useState } from 'react';
import './Lookup.css';
import { SupplierDTO } from '../../contexts/api-client';
import { useApiClientContext } from '../../contexts/api-client/ApiClient';
import {
	toSelectedLocale,
	useLanguageContext,
} from '../../contexts/language/Language';
import getAllSuppliers, {
	searchSuppliers,
} from '../../services/supplier-service';
import { initialSupplier } from '../../utils/supplier.utils';
import Button from '../button/Button';
import CancelIcon from '../icons/CancelIcon';
import TextInput from '../input/TextInput';
import Table from '../table/Table';

interface SupplierLookupProps {
	closeSearch: () => void;
	selectSupplier: (supplier: SupplierDTO) => void;
}

const SupplierLookup: FC<SupplierLookupProps> = ({
	closeSearch,
	selectSupplier,
}): JSX.Element => {
	const [suppliersBuffer, setSuppliersBuffer] = useState<SupplierDTO[]>([]);
	const [supplierInfo, setSupplierInfo] =
		useState<SupplierDTO>(initialSupplier);
	const [selectedSupplier, setSelectedSupplier] =
		useState<SupplierDTO>(initialSupplier);

	const { language } = useLanguageContext();
	const { basicDataClient } = useApiClientContext();

	const supplierSearch = async (): Promise<void> => {
		const result = await searchSuppliers(basicDataClient, supplierInfo);

		setSuppliersBuffer(result);
	};

	const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
		setSupplierInfo((prev) => ({
			...prev,
			name: e.target.value,
		}));
	};

	const handleIndexChange = (e: ChangeEvent<HTMLInputElement>): void => {
		setSupplierInfo((prev) => ({
			...prev,
			indexValue: e.target.value,
		}));
	};

	const handleCityChange = (e: ChangeEvent<HTMLInputElement>): void => {
		setSupplierInfo((prev) => ({
			...prev,
			city: e.target.value,
		}));
	};

	const clearFields = (): void => {
		setSupplierInfo(initialSupplier);
	};

	const handleSelect = (index: number | number[]): void => {
		setSelectedSupplier(suppliersBuffer[index as number]);
	};

	const handleSave = (): void => {
		selectSupplier(selectedSupplier);
		closeSearch();
	};

	useEffect(() => {
		const getSuppliers = async (): Promise<void> => {
			const result = await getAllSuppliers(basicDataClient);

			setSuppliersBuffer(result);
		};

		getSuppliers();
	}, []);

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
							value={supplierInfo.name ?? ''}
							onchange={handleNameChange}
						/>
						<TextInput
							label={toSelectedLocale('supplierIndex', language)}
							value={supplierInfo.index?.toString() ?? ''}
							onchange={handleIndexChange}
						/>
						<TextInput
							label={toSelectedLocale('city', language)}
							value={supplierInfo.city ?? ''}
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
							index: supplier.index,
							city: supplier.city,
						}))}
						selectable
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
