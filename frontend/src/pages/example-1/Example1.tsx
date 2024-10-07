import { FC, useEffect, useState } from 'react';
import AppRoutes from '../../common/app-routes/AppRoutes';
import Button from '../../common/components/button/Button';
import Table from '../../common/components/table/Table';
import './Example1.css';
import CertificateSettings from './certificate-settings/CertificateSettings';
import {
	SupplierDTO,
	TableCertificatesDTO,
} from '../../common/contexts/api-client';
import { useApiClientContext } from '../../common/contexts/api-client/ApiClient';
import {
	toSelectedLocale,
	useLanguageContext,
} from '../../common/contexts/language/Language';
import { getAllCertificates } from '../../common/services/certificate-service';

const Example1: FC = (): JSX.Element => {
	const [certificates, setCertificates] = useState<TableCertificatesDTO[]>([]);
	const { language } = useLanguageContext();
	const { certificateClient } = useApiClientContext();

	const fetchCertificates = async () => {
		const _certs = await getAllCertificates(certificateClient);

		setCertificates(_certs);
	};

	const supplierNameDisplay = (supplier: SupplierDTO): string => {
		return `${supplier.name}, ${supplier.index}, ${supplier.city}`;
	};

	const reloadPage = () => {
		window.location.reload();
	};

	useEffect(() => {
		fetchCertificates();
	}, []);

	return (
		<>
			<Button
				name={toSelectedLocale('newCertificate', language)}
				bg="#c0cc38"
				color="white"
				type="link"
				to={AppRoutes.NewCertificate}
				onClick={() => {}}
			/>
			<div className="certificates-table">
				<Table
					columns={[
						'',
						toSelectedLocale('supplier', language),
						toSelectedLocale('type', language),
						toSelectedLocale('validFrom', language),
						toSelectedLocale('validTo', language),
					]}
					data={certificates.map((cert) => ({
						settings: (
							<CertificateSettings
								certificateId={cert.handle ?? ''}
								update={reloadPage}
							/>
						),
						supplier: cert.supplier,
						type: cert.certificateType,
						validFrom: cert.validFrom,
						validTo: cert.validTo,
					}))}
				/>
			</div>
		</>
	);
};

export default Example1;
