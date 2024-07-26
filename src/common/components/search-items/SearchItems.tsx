import { ChangeEvent, FC, useEffect, useState } from 'react';
import './SearchItems.css';
import TextInput from '../input/TextInput';
import CancelIcon from '../icons/CancelIcon';
import Button from '../button/Button';
import Supplier from '../../models/supplier.model';
import getAllSuppliers from '../../db/supplier-service';
import SelectTable from '../select-table/SelectTable';
import initialCertificate from '../../utils/certificate.utils';
import User from '../../models/user.model';
import { initialSupplier } from '../../utils/supplier.utils';
import { initialUser } from '../../utils/user.utils';
import getAllUsers from '../../db/user-service';
import { Languages, useLanguageContext } from '../../language/Language';

export type SearchType = Supplier | User;

interface SearchItemsProps {
	closeSearch: () => void;
	selectItem: (item: SearchType) => void;
	type: 'supplier' | 'user';
}

const SearchItems: FC<SearchItemsProps> = ({
	closeSearch,
	selectItem,
	type,
}): JSX.Element => {
	const [itemsBuffer, setItemsBuffer] = useState<SearchType[]>([]);
	const [itemsArray, setItemsArray] = useState<SearchType[]>([]);
	const [itemInfo, setItemInfo] = useState<SearchType>(
		type === 'supplier' ? initialSupplier : initialUser,
	);
	const [selectedItem, setSelectedItem] = useState<SearchType>(
		type === 'supplier' ? initialSupplier : initialUser,
	);
	const { language } = useLanguageContext();

	useEffect(() => {
		if (type === 'supplier') {
			getAllSuppliers().then((data) => {
				setItemsArray(data);
				setItemsBuffer(data);
			});
		} else {
			getAllUsers().then((data) => {
				setItemsArray(data);
				setItemsBuffer(data);
			});
		}
	}, []);

	const searchItems = (): void => {
		const _items: SearchType[] = [];

		if (type === 'supplier') {
			for (let i = 0; i < itemsArray.length; i++) {
				let item = itemsArray[i] as Supplier;
				let indexx = item.indexValue;
				if (
					item.name.includes((itemInfo as Supplier).name, 0) &&
					item.indexValue.includes((itemInfo as Supplier).indexValue, 0) &&
					item.city.includes((itemInfo as Supplier).city, 0)
				) {
					_items.push(item);
				}
			}
		} else {
			for (let i = 0; i < itemsArray.length; i++) {
				let item = itemsArray[i] as User;
				if (
					item.name.includes((itemInfo as User).name, 0) &&
					item.firstName.includes((itemInfo as User).firstName, 0) &&
					item.userId.includes((itemInfo as User).userId, 0) &&
					item.department.includes((itemInfo as User).department, 0) &&
					item.plant.includes((itemInfo as User).plant, 0)
				) {
					_items.push(item);
				}
			}
		}

		setItemsBuffer(_items);
	};

	const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
		setItemInfo((prev) => ({
			...prev,
			name: e.target.value,
		}));
	};
	const handleIndexChange = (e: ChangeEvent<HTMLInputElement>) => {
		setItemInfo((prev) => ({
			...prev,
			indexValue: e.target.value,
		}));
	};
	const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
		setItemInfo((prev) => ({
			...prev,
			city: e.target.value,
		}));
	};

	const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
		setItemInfo((prev) => ({
			...prev,
			firstName: e.target.value,
		}));
	};

	const handleDepartmentChange = (e: ChangeEvent<HTMLInputElement>) => {
		setItemInfo((prev) => ({
			...prev,
			department: e.target.value,
		}));
	};
	const handleUserIdChange = (e: ChangeEvent<HTMLInputElement>) => {
		setItemInfo((prev) => ({
			...prev,
			userId: e.target.value,
		}));
	};
	const handlePlantChange = (e: ChangeEvent<HTMLInputElement>) => {
		setItemInfo((prev) => ({
			...prev,
			plant: e.target.value,
		}));
	};

	const clearFields = () => {
		setItemInfo(type === 'supplier' ? initialSupplier : initialUser);
	};

	return (
		<div className="search-container">
			<div className="search-top-bar">
				<p className="search-top-bar-title">
					{type === 'supplier'
						? language === Languages.English
							? 'Search for Suppliers'
							: 'Suche nach Lieferanten'
						: language === Languages.English
							? 'Search for Persons'
							: 'Suche nach Personen'}
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
						{type === 'supplier' ? (
							<>
								<TextInput
									label={
										language === Languages.English
											? 'Supplier Name'
											: 'Name des Anbieters'
									}
									value={itemInfo.name}
									onchange={handleNameChange}
								/>
								<TextInput
									label="Supplier Index"
									value={(itemInfo as Supplier).indexValue}
									onchange={handleIndexChange}
								/>
								<TextInput
									label={language === Languages.English ? 'City' : 'Stadt'}
									value={(itemInfo as Supplier).city}
									onchange={handleCityChange}
								/>
							</>
						) : (
							<>
								<TextInput
									label="Name"
									value={itemInfo.name}
									onchange={handleNameChange}
								/>
								<TextInput
									label={
										language === Languages.English ? 'First Name' : 'Vorname'
									}
									value={(itemInfo as User).firstName}
									onchange={handleFirstNameChange}
								/>
								<TextInput
									label={
										language === Languages.English ? 'User ID' : 'Benutzer-ID'
									}
									value={(itemInfo as User).userId}
									onchange={handleUserIdChange}
								/>
								<TextInput
									label="Department"
									value={(itemInfo as User).department}
									onchange={handleDepartmentChange}
								/>
								<TextInput
									label="Plant"
									value={(itemInfo as User).plant}
									onchange={handlePlantChange}
								/>
							</>
						)}
					</div>
					<Button
						name={language === Languages.English ? 'Search' : 'Suchen'}
						color="white"
						bg="rgb(0, 44, 57)"
						type="button"
						to=""
						onClick={searchItems}
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
							type === 'supplier'
								? language === Languages.English
									? ['Supplier name', 'Supplier index', 'City']
									: ['Name des Anbieters', 'Lieferantenindex', 'Stadt']
								: ['Name', 'First Name', 'User ID', 'Department', 'Plant']
						}
						items={itemsBuffer}
						type={type}
						onselect={setSelectedItem}
					/>
					<Button
						name={language === Languages.English ? 'Save' : 'Speichern'}
						color="white"
						bg="rgb(255, 177, 75)"
						type="button"
						to=""
						onClick={() => {
							selectItem(selectedItem);
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
