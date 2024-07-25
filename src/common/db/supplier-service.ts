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

export default getAllSuppliers;
