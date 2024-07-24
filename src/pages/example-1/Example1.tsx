import { FC, useState } from 'react';
import certificates from './certificates-mock-data';
import AppRoutes from '../../common/app-routes/AppRoutes';
import Button from '../../common/components/button/Button';
import Table from '../../common/components/table/Table';
import formatDate from '../../common/utils/format-date.utils';
import './Example1.css';
import CertificateSettings from './certificate-settings/CertificateSettings';

const Example1: FC = (): JSX.Element => {
	const [count, setCount] = useState<number>(0);

	return (
		<>
			<Button
				name="New Certificate"
				bg="#c0cc38"
				color="white"
				type="link"
				to={AppRoutes.NewCertificate}
				onClick={() => {}}
			/>
			<div className="certificates-table">
				<Table
					columns={['', 'Supplier', 'Type', 'Valid from', 'Valid to']}
					data={certificates.map((certificate, index) => [
						(<CertificateSettings
							certificateId={certificate.id}
							certificateIndex={index}
							update={() => {
								setCount(count + 1);
								document.body.focus();
							}}
						/>),
						`${certificate.supplier.name}, ${certificate.supplier.index}, ${certificate.supplier.city}`,
						certificate.type,
						formatDate(certificate.validFrom),
						formatDate(certificate.validTo),
					])}
				/>
			</div>
		</>
	);
};

export default Example1;
