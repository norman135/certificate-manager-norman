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
import { Languages, useLanguageContext } from '../../language/Language';

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
	const { language } = useLanguageContext();
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
				<p className="search-top-bar-title">
					{language === Languages.English
						? 'Search for Suppliers'
						: 'Suche nach Lieferanten'}
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
						{language === Languages.English
							? 'Search criteria'
							: 'Suchkriterium'}
					</div>
					<div className="search-criteria-input-area">
						<TextInput
							label={
								language === Languages.English
									? 'Supplier Name'
									: 'Name des Anbieters'
							}
							value={name}
							onchange={handleNameChange}
						/>
						<TextInput
							label={
								language === Languages.English
									? 'Supplier Index'
									: 'Lieferantenindex'
							}
							value={index}
							onchange={handleIndexChange}
						/>
						<TextInput
							label={language === Languages.English ? 'City' : 'Stadt'}
							value={city}
							onchange={handleCityChange}
						/>
					</div>
					<Button
						name={language === Languages.English ? 'Search' : 'Suchen'}
						color="white"
						bg="rgb(0, 44, 57)"
						type="button"
						to=""
						onClick={searchSuppliers}
					/>
					<Button
						name={language === Languages.English ? 'Reset' : 'Zurücksetzen'}
						color="black"
						bg="rgb(226, 226, 226)"
						type="button"
						to=""
						onClick={clearFields}
					/>
				</div>
				<div className="search-list">
					<div className="expand-bar">
						{language === Languages.English
							? 'Supplier list'
							: 'Lieferantenliste'}
					</div>
					<SelectTable
						columns={
							language === Languages.English
								? ['Supplier name', 'Supplier index', 'City']
								: ['Name des Anbieters', 'Lieferantenindex', 'Stadt']
						}
						items={suppliersBuffer}
						onselect={setSelectedSupplier}
					/>
					<Button
						name={language === Languages.English ? 'Save' : 'Speichern'}
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
						name={language === Languages.English ? 'Cancel' : 'Stornieren'}
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
