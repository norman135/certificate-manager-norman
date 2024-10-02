import { SupplierDTO } from '../../models/dtos/supplier-dto';
import Supplier from '../../models/supplier.model';

export class SupplierMapper {
	static ToModel(supplierDTO: SupplierDTO): Supplier {
		let supplier: Supplier = {
			id: supplierDTO.handle,
			name: supplierDTO.name,
			indexValue: supplierDTO.index.toString(),
			city: supplierDTO.city,
		};

		return supplier;
	}
}
