import { CertificateType } from '../models/certificate.model';

const certificateTypes: { id: number; type: CertificateType }[] = [
	{
		id: 0,
		type: CertificateType.none,
	},
	{
		id: 1,
		type: CertificateType.printingPermission,
	},
	{
		id: 2,
		type: CertificateType.ohsas,
	},
];

export default certificateTypes;
