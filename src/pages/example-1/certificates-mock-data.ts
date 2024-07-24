import Certificate from '../../common/models/certificate.model';

const certificates: Certificate[] = [
	{
		id: 1,
		supplier: 'DAIMLER AG, 1, Berlin',
		type: 'Permission of Printing',
		validFrom: new Date('2017-08-21'),
		validTo: new Date('2017-08-26'),
	},
	{
		id: 2,
		supplier: 'ANDEMIS GmBH, 1, Stuttgart',
		type: 'OHSAS 18001',
		validFrom: new Date('2017-08-18'),
		validTo: new Date('2017-08-24'),
	},
	{
		id: 3,
		supplier: 'ANDEMIS GmBH, 1, Stuttgart',
		type: 'Permission of Printing',
		validFrom: new Date('2017-10-04'),
		validTo: new Date('2017-10-10'),
	},
];

export default certificates;
