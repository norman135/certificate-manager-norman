import Supplier from './supplier.model';

type Certificate = {
	id: string;
	supplier: Supplier;
	type: string;
	validFrom: Date;
	validTo: Date;
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
