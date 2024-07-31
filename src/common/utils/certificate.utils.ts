import Certificate, { CertificateType } from '../models/certificate.model';
import User from '../models/user.model';
import { initialDate } from './format-date.utils';
import { initialSupplier } from './supplier.utils';

export const initialCertificate: Certificate = {
	id: '',
	supplier: initialSupplier,
	type: CertificateType.none,
	validFrom: initialDate,
	validTo: initialDate,
	pdf: '',
	users: [],
};

export default initialCertificate;
