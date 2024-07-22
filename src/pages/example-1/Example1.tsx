import { FC } from 'react';
import './Example1.css';

type Certificate = {
	supplier: string;
	type: string;
	validFrom: Date;
	validTo: Date;
};

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

const formatDate = (date: Date): string => {
	const day = date.getDate();
	const month = date.getMonth();
	const year = date.getFullYear();

	return `${day}.${month}.${year}`;
};

const Example1: FC = (): JSX.Element => {
	return (
		<div className="certificates-table">
			<table>
				<thead>
					<tr>
						<th />
						<th>Supplier</th>
						<th>Certificate type</th>
						<th>Valid from</th>
						<th>Valid to</th>
					</tr>
				</thead>
				<tbody>
					{certificates.map((certificate) => (
						<tr key={certificate.supplier}>
							<td />
							<td>{certificate.supplier}</td>
							<td>{certificate.type}</td>
							<td>{formatDate(certificate.validFrom)}</td>
							<td>{formatDate(certificate.validTo)}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Example1;
