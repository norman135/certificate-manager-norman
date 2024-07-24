import certificates from '../../pages/example-1/certificates-mock-data';
import Certificate, { CertificateType } from '../models/certificate.model';

const initialCertificate = (certificateId: number | undefined): Certificate => {
	if (certificateId) {
		const certificateIndex: number = certificates.findIndex(
			(certificate_) => certificate_.id === certificateId,
		);
		return certificates[certificateIndex];
	} else {
		return {
			id: 0,
			supplier: '',
			type: CertificateType.none,
			validFrom: new Date('2000-01-01'),
			validTo: new Date('2000-01-01'),
		};
	}
};

export const handleSave = (
	certificateId: number | undefined,
	update: React.Dispatch<React.SetStateAction<Certificate>>,
	certificate: Certificate,
): void => {
	if (certificateId) {
		const certificateIndex: number = certificates.findIndex(
			(certificate_) => certificate_.id === certificateId,
		);
		certificates[certificateIndex] = certificate;
		update((prev) => ({
			...prev,
			supplier: '',
			type: CertificateType.none,
			validFrom: new Date('2000-01-01'),
			validTo: new Date('2000-01-01'),
		}));
	} else {
		update((prev) => ({
			...prev,
			id: certificates.length + 1,
		}));
		certificates.push(certificate);
	}
};

export default initialCertificate;
