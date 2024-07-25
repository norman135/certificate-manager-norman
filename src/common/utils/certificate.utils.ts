import certificates from '../../pages/example-1/certificates-mock-data';
import Certificate, { CertificateType } from '../models/certificate.model';

export const getCertificateIndex = (certificateId: number): number => {
	return certificates.findIndex(
		(certificate_) => certificate_.id === certificateId,
	);
};

export const initialCertificate: Certificate = {
	id: 0,
	supplier: '',
	type: CertificateType.none,
	validFrom: new Date('2000-01-01'),
	validTo: new Date('2000-01-01'),
};

export default initialCertificate;
