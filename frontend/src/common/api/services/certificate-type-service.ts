import { CertificateTypeModel } from '../../models/certificate.model';
import { CertificateTypeDTO } from '../../models/dtos/certificate-type-dto';
import { CertificateTypeMapper } from '../../utils/mappers/certificate-type-mapper';
import { getAllItems } from '../api';

const getAllCertificateTypes = async (): Promise<CertificateTypeModel[]> => {
	try {
		const certificateTypes: CertificateTypeDTO[] =
			await getAllItems('certificates/types');

		const certificateTypeModels: CertificateTypeModel[] = certificateTypes.map(
			(type) => CertificateTypeMapper.ToModel(type),
		);

		if (certificateTypeModels) {
			return certificateTypeModels;
		} else {
			return [];
		}
	} catch (error) {
		console.error('Error getting certificate types:', error);
		return [];
	}
};

export default getAllCertificateTypes;
