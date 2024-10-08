import { FC, useEffect, useState } from 'react';
import CertificateSettings from './certificate-settings/CertificateSettings';
import { TableCertificatesDTO } from '../../common/api';
import AppRoutes from '../../common/app-routes/AppRoutes';
import Button from '../../common/components/button/Button';
import Table from '../../common/components/table/Table';
import './Example1.css';
import { useApiClientContext } from '../../common/contexts/api-client/ApiClient';
import {
	toSelectedLocale,
	useLanguageContext,
} from '../../common/contexts/language/Language';

const Example1: FC = (): JSX.Element => {
	const [certificates, setCertificates] = useState<TableCertificatesDTO[]>([]);
	const [loader, setLoader] = useState<boolean>(true);

	const { language } = useLanguageContext();
	const { certificateClient } = useApiClientContext();

	const fetchCertificates = async (): Promise<void> => {
		const _certs = await certificateClient.certificatesGet();

		setLoader(false);
		setCertificates(_certs);
	};

	const reloadPage = (): void => {
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
				{loader ? (
					'Loading...'
				) : (
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
				)}
			</div>
		</>
	);
};

export default Example1;
