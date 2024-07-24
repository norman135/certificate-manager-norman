export type Supplier = {
	index: number;
	name: string;
	city: string;
};

type Certificate = {
	id: number;
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

export default Certificate;
