import { FC, useEffect, useState } from 'react';
import AppRoutes from '../../common/app-routes/AppRoutes';
import Button from '../../common/components/button/Button';
import Table from '../../common/components/table/Table';
import formatDate from '../../common/utils/format-date.utils';
import './Example1.css';
import CertificateSettings from './certificate-settings/CertificateSettings';
import Certificate from '../../common/models/certificate.model';
import { getAllCertificates } from '../../common/db/certificate-service';
import Supplier from '../../common/models/supplier.model';

const Example1: FC = (): JSX.Element => {
	const [certificates, setCertificates] = useState<Certificate[]>([]);

	const fetchCertificates = async () => {
		const _certs = await getAllCertificates();

		setCertificates(_certs);
	};

	const supplierNameDisplay = (supplier: Supplier): string => {
		return `${supplier.name}, ${supplier.indexValue}, ${supplier.city}`;
	};

	useEffect(() => {
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
					data={certificates.map((certificate) => [
						<CertificateSettings
							certificateId={certificate.id}
							update={fetchCertificates}
						/>,
						supplierNameDisplay(certificate.supplier),
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
