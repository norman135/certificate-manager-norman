import { CertificateType } from '../../models/certificate.model';
import { certificatesClient } from './certificate-service';

const getAllCertificateTypes = async (): Promise<CertificateType[]> => {
	try {
		const certificateTypes: CertificateType[] =
			(await certificatesClient.types()) ?? [];

		return certificateTypes;
	} catch (error) {
		console.error('Error getting certificate types:', error);
		return [];
	}
};

export default getAllCertificateTypes;
