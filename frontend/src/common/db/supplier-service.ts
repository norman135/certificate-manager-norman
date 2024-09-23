import Supplier from '../models/supplier.model';
import { getAllItems } from './db';

const getAllSuppliers = async (): Promise<Supplier[]> => {
	try {
		const request = await getAllItems('suppliers');
		return new Promise<Supplier[]>((resolve, reject) => {
			request.onsuccess = () => {
				resolve(request.result as Supplier[]);
			};
			request.onerror = () => {
				reject(request.error);
			};
		});
	} catch (error) {
		console.error('Error getting all Suppliers:', error);
		return [];
	}
};

export const searchSuppliers = async (criteria: {
	name: string;
	index: string;
	city: string;
}): Promise<Supplier[]> => {
	const allSuppliers = await getAllSuppliers();

	return allSuppliers.filter(
		(supplier) =>
			supplier.name
				.toLocaleUpperCase()
				.includes(criteria.name.toLocaleUpperCase()) &&
			supplier.indexValue
				.toLocaleUpperCase()
				.includes(criteria.index.toLocaleUpperCase()) &&
			supplier.city
				.toLocaleUpperCase()
				.includes(criteria.city.toLocaleUpperCase()),
	);
};

export default getAllSuppliers;
