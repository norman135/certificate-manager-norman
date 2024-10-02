import { FC, useEffect, useState } from 'react';
import AppRoutes from '../../common/app-routes/AppRoutes';
import Button from '../../common/components/button/Button';
import Table from '../../common/components/table/Table';
import formatDate from '../../common/utils/format-date.utils';
import './Example1.css';
import CertificateSettings from './certificate-settings/CertificateSettings';
import Certificate from '../../common/models/certificate.model';
import { getAllCertificates } from '../../common/api/services/certificate-service';
import {
	Languages,
	toSelectedLocale,
	useLanguageContext,
} from '../../common/contexts/language/Language';
import Supplier from '../../common/models/supplier.model';
import { TableCertificateDTO } from '../../common/models/dtos/certificate-dto';

const Example1: FC = (): JSX.Element => {
	const [certificates, setCertificates] = useState<TableCertificateDTO[]>([]);
	const { language } = useLanguageContext();

	const fetchCertificates = async () => {
		const _certs = await getAllCertificates();

		setCertificates(_certs);
	};

	const supplierNameDisplay = (supplier: Supplier): string => {
		return `${supplier.name}, ${supplier.indexValue}, ${supplier.city}`;
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
								certificateId={cert.handle}
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
