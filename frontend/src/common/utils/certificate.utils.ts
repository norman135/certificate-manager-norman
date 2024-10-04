import Certificate from '../models/certificate.model';
import formatDate, { initialDate } from './format-date.utils';
import { initialSupplier } from './supplier.utils';

export const initialCertificate: Certificate = {
	handle: '',
	supplier: initialSupplier,
	certificateType: {
		handle: '',
		name: 'Choose Type',
	},
	validFrom: formatDate(initialDate),
	validTo: formatDate(initialDate),
	document: '',
	participants: [],
	comments: [],
};

export default initialCertificate;
