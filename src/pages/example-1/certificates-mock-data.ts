import Certificate from '../../common/models/certificate.model';
import suppliers from './suppliers-mock-data';

const certificates: Certificate[] = [
	{
		id: 1,
		supplier: suppliers[0],
		type: 'Permission of Printing',
		validFrom: new Date('2017-08-21'),
		validTo: new Date('2017-08-26'),
	},
	{
		id: 2,
		supplier: suppliers[1],
		type: 'OHSAS 18001',
		validFrom: new Date('2017-08-18'),
		validTo: new Date('2017-08-24'),
	},
	{
		id: 3,
		supplier: suppliers[1],
		type: 'Permission of Printing',
		validFrom: new Date('2017-10-04'),
		validTo: new Date('2017-10-10'),
	},
];

export default certificates;
