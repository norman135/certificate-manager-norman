import Comment from './comment.model';
import Supplier from './supplier.model';
import User from './user.model';

type Certificate = {
	handle: string;
	supplier: Supplier;
	certificateType: CertificateType;
	validFrom: string;
	validTo: string;
	document: string;
	comments: Comment[];
	participants: User[];
};

export type TableCertificate = {
	handle: string;
	supplier: string;
	certificateType: string;
	validFrom: string;
	validTo: string;
};

export type PostCertificate = {
	supplierHandle: string;
	certificateTypeHandle: string;
	validFrom: string;
	validTo: string;
	document: string;
};

export type UpdateCretificate = {
	supplierHandle: string;
	certificateTypeHandle: string;
	validFrom: string;
	validTo: string;
	document: string;
	participants: User[];
};

export type CertificateType = {
	handle: string;
	name: string;
};

export default Certificate;
