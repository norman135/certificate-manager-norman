import Certificate from '../../common/models/certificate.model';

const certificates: Certificate[] = [
	{
		supplier: 'DAIMLER AG, 1, Berlin',
		type: 'Permission of Printing',
		validFrom: new Date('08-21-2017'),
		validTo: new Date('08-26-2017'),
	},
	{
		supplier: 'ANDEMIS GmBH, 1, Stuttgart',
		type: 'OHSAS 18001',
		validFrom: new Date('08-18-2017'),
		validTo: new Date('08-24-2017'),
	},
	{
		supplier: 'ANDEMIS GmBH, 1, Stuttgart',
		type: 'Permission of Printing',
		validFrom: new Date('10-04-2017'),
		validTo: new Date('10-10-2017'),
	},
];

export default certificates;
