type Certificate = {
	id: number;
	supplier: string;
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
