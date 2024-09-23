import { CertificateTypeModel } from '../models/certificate.model';
import { getAllItems } from './db';

const getAllCertificateTypes = async (): Promise<CertificateTypeModel[]> => {
	try {
		const request = await getAllItems('certificate-types');
		return new Promise<CertificateTypeModel[]>((resolve, reject) => {
			request.onsuccess = () => {
				resolve(request.result as CertificateTypeModel[]);
			};
			request.onerror = () => {
				reject(request.error);
			};
		});
	} catch (error) {
		console.error('Error getting all Certificate Types:', error);
		return [];
	}
};

export default getAllCertificateTypes;
