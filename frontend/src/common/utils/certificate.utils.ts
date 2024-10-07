import { initialDate, toIsoString } from './format-date.utils';
import { initialSupplier } from './supplier.utils';
import { CertificateDTO } from '../contexts/api-client';

export const initialCertificate: CertificateDTO = {
	handle: '',
	supplier: initialSupplier,
	certificateType: {
		handle: '',
		name: 'Choose Type',
	},
	validFrom: toIsoString(initialDate),
	validTo: toIsoString(initialDate),
	document: '',
	participants: [],
	comments: [],
};

export default initialCertificate;
