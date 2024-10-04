import Supplier from '../../models/supplier.model';
import { certificatesClient } from './certificate-service';

const getAllSuppliers = async (): Promise<Supplier[]> => {
	try {
		const suppliers: Supplier[] =
			(await certificatesClient.suppliers(undefined, undefined, undefined)) ??
			[];

		return suppliers;
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
	try {
		const suppliers: Supplier[] =
			(await certificatesClient.suppliers(
				parseInt(criteria.index),
				criteria.name,
				criteria.city,
			)) ?? [];

		return suppliers;
	} catch (error) {
		console.error('Error searching Suppliers:', error);
		return [];
	}
};

export default getAllSuppliers;
