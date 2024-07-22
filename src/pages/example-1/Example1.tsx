import { FC } from 'react';
import certificates from './certificates-mock-data';
import Table from '../../common/components/table/Table';
import formatDate from '../../common/utils/format-date.utils';
import './Example1.css';

const Example1: FC = (): JSX.Element => {
	return (
		<div className="certificates-table">
			<Table
				columns={['Supplier', 'Type', 'Valid from', 'Valid to']}
				data={certificates.map((certificate) => [
					certificate.supplier,
					certificate.type,
					formatDate(certificate.validFrom),
					formatDate(certificate.validTo),
				])}
			/>
		</div>
	);
};

export default Example1;
