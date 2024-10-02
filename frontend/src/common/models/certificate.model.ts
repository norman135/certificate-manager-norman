import UserComment from './comment.model';
import Supplier from './supplier.model';
import User from './user.model';

type Certificate = {
	id: string;
	supplier: Supplier;
	type: CertificateTypeModel;
	validFrom: Date;
	validTo: Date;
	users?: User[];
	pdf: string;
	comments: UserComment[];
};

// export enum CertificateType {
// 	none = '',
// 	printingPermission = 'Permission of Printing',
// 	ohsas = 'OHSAS 18001',
// }

export type CertificateTypeModel = {
	id: string;
	type: string;
};

export default Certificate;
