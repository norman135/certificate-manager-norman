import Certificate, { CertificateType } from '../models/certificate.model';

export const initialCertificate: Certificate = {
	id: '',
	supplier: {
		id: '',
		indexValue: '',
		name: '',
		city: '',
	},
	type: CertificateType.none,
	validFrom: new Date('2000-01-01'),
	validTo: new Date('2000-01-01'),
};

export default initialCertificate;
