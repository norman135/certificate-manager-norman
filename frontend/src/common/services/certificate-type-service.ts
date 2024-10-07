import { BasicDataApi } from '../contexts/api-client';
import { CertificateTypeDTO } from '../contexts/api-client/models';

const getAllCertificateTypes = async (
	basicDataClient: BasicDataApi,
): Promise<CertificateTypeDTO[]> => {
	try {
		const certificateTypes: CertificateTypeDTO[] =
			await basicDataClient.certificatesTypesGet();

		return certificateTypes;
	} catch (error) {
		console.error('Error getting certificate types:', error);
		return [];
	}
};

export default getAllCertificateTypes;
