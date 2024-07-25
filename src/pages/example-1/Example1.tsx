import { FC, useEffect, useState } from 'react';
import AppRoutes from '../../common/app-routes/AppRoutes';
import Button from '../../common/components/button/Button';
import Table from '../../common/components/table/Table';
import formatDate from '../../common/utils/format-date.utils';
import './Example1.css';
import CertificateSettings from './certificate-settings/CertificateSettings';
import Certificate from '../../common/models/certificate.model';
import { getAllCertificates } from '../../common/db/certificate-service';

const Example1: FC = (): JSX.Element => {
	const [count, setCount] = useState<number>(0);
	const [certificates, setCertificates] = useState<Certificate[]>([]);

	const handleUpdate = () => {
		setCount(count + 1);
	};

	useEffect(() => {
		const fetchCertificates = async () => {
			const _certs = await getAllCertificates();

			setCertificates(_certs);
		};

		fetchCertificates();
	}, []);

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
						<CertificateSettings
							certificateId={certificate.id}
							certificateIndex={index}
							update={handleUpdate}
						/>,
						certificate.supplier,
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
