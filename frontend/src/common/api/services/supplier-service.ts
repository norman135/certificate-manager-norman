import { SupplierDTO } from '../../models/dtos/supplier-dto';
import Supplier from '../../models/supplier.model';
import { SupplierMapper } from '../../utils/mappers/supplier-mapper';
import { getAllItems } from '../api';

const getAllSuppliers = async (): Promise<Supplier[]> => {
	try {
		const supplierDTOs: SupplierDTO[] = await getAllItems('suppliers');

		const suppliers: Supplier[] = supplierDTOs.map((supplier) =>
			SupplierMapper.ToModel(supplier),
		);

		if (suppliers) {
			return suppliers;
		} else {
			return [];
		}
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
	const supplierDTOs: SupplierDTO[] = await getAllItems(
		`suppliers?name=${criteria.name}&index=${criteria.index}&city=${criteria.city}`,
	);

	const suppliers: Supplier[] = supplierDTOs.map((supplier) =>
		SupplierMapper.ToModel(supplier),
	);

	if (suppliers) {
		return suppliers;
	} else {
		return [];
	}
};

export default getAllSuppliers;
