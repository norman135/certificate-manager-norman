import { BasicDataApi, SuppliersGetRequest } from '../contexts/api-client/apis';
import { SupplierDTO } from '../contexts/api-client/models';

const getAllSuppliers = async (
	basicDataClient: BasicDataApi,
): Promise<SupplierDTO[]> => {
	try {
		const suppliers: SupplierDTO[] = await basicDataClient.suppliersGet();

		return suppliers;
	} catch (error) {
		console.error('Error getting all Suppliers:', error);
		return [];
	}
};

export const searchSuppliers = async (
	basicDataClient: BasicDataApi,
	criteria: SupplierDTO,
): Promise<SupplierDTO[]> => {
	try {
		const suppliers: SupplierDTO[] = await basicDataClient.suppliersGet(
			criteria as SuppliersGetRequest,
		);

		return suppliers;
	} catch (error) {
		console.error('Error getting all Suppliers:', error);
		return [];
	}
};

export default getAllSuppliers;
