import UserComment from './comment.model';
import Supplier from './supplier.model';
import User from './user.model';

type Certificate = {
	id: string;
	supplier: Supplier;
	type: CertificateType;
	validFrom: Date;
	validTo: Date;
	users?: User[];
	pdf: string;
	comments: UserComment[];
};

export enum CertificateType {
	none = '',
	printingPermission = 'Permission of Printing',
	ohsas = 'OHSAS 18001',
}

export type CertificateTypeModel = {
	id: string;
	type: CertificateType;
};

export default Certificate;
