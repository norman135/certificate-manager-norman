import { CertificateTypeDTO } from './certificate-type-dto';
import { CommentDTO } from './comment-dto';
import { SupplierDTO } from './supplier-dto';
import { UserDTO } from './user-dto';

export type CertificateDTO = {
	handle: string;
	supplier: SupplierDTO;
	certificateType: CertificateTypeDTO;
	validFrom: string;
	validTo: string;
	document: string;
	comments: CommentDTO[];
	participants: UserDTO[];
};

export type TableCertificateDTO = {
	handle: string;
	supplier: SupplierDTO;
	certificateType: string;
	validFrom: string;
	validTo: string;
};

export type CertificateAddDTO = {
	supplierHandle: string;
	certificateTypeHandle: string;
	validFrom: string;
	validTo: string;
	document: string;
};

export type CertificateUpdateDTO = {
	supplierHandle: string;
	certificateTypeHandle: string;
	validFrom: string;
	validTo: string;
	document: string;
	participants?: UserDTO[];
};
