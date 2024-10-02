import Certificate from '../models/certificate.model';
import { initialDate } from './format-date.utils';
import { initialSupplier } from './supplier.utils';

export const initialCertificate: Certificate = {
	id: '',
	supplier: initialSupplier,
	type: {
		id: '',
		type: 'Choose Type',
	},
	validFrom: initialDate,
	validTo: initialDate,
	pdf: '',
	users: [],
	comments: [],
};

export default initialCertificate;
