import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './CertificateDetails.css';
import AppRoutes from '../../../common/app-routes/AppRoutes';
import Button from '../../../common/components/button/Button';
import Certificate, {
	CertificateType,
} from '../../../common/models/certificate.model';
import DatePicker from '../../../common/date-picker/DatePicker';
import Select from '../../../common/select/Select';
import PdfViewer from '../pdf-viewer/PdfViewer';
import { toIsoString } from '../../../common/utils/format-date.utils';
import {
	addCertificate,
	getCertificate,
	updateCertificate,
} from '../../../common/db/certificate-service';
import initialCertificate from '../../../common/utils/certificate.utils';
import Supplier from '../../../common/models/supplier.model';
import {
	toSelectedLocale,
	useLanguageContext,
} from '../../../common/language/Language';
import SupplierInputLookup from './supplier-lookup-input/SupplierInputLookup';

interface CertificateDetailsProps {
	certificateId?: string;
}

const CertificateDetails: FC<CertificateDetailsProps> = ({
	certificateId,
}): JSX.Element => {
	const [certificate, setCertificate] =
		useState<Certificate>(initialCertificate);
	const [fileURL, setFileURL] = useState<string>('');
	const { language } = useLanguageContext();

	const navigate = useNavigate();

	const goBack = (): void => {
		navigate(AppRoutes.Example1);
	};

	useEffect(() => {
		if (certificateId) {
			const fetchCertificate = async () => {
				const _cert = await getCertificate(certificateId);

				if (_cert) {
					setCertificate(_cert);
				} else {
					console.error('Error retrieving certificate.');
				}
			};

			fetchCertificate();
		} else {
			const fetchCerts = async () => {
				setCertificate({
					...initialCertificate,
					id: uuidv4(),
				});
			};

			fetchCerts();
		}
	}, [certificateId]);

	const handleSave = (): void => {
		if (certificateId) {
			const updateCert = async () => {
				if (!(await updateCertificate(certificate))) {
					console.error('Error attempting to update certificate.');
				}
			};

			updateCert();
		} else {
			const addCert = async () => {
				if (!(await addCertificate(certificate))) {
					console.error('Error attempting to add certificate');
				}
			};

			addCert();
		}
		goBack();
	};

	const resetInput = (): void => {
		const _cert = initialCertificate;
		if (certificateId) {
			_cert.id = certificateId;
		}
		setCertificate(_cert);
	};

	const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setCertificate((prev) => ({
			...prev,
			type: e.target.value as CertificateType,
		}));
	};

	const handleValidFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const validFromDate = new Date(e.target.value);

		if (validFromDate > certificate.validTo!) {
			setCertificate((prev) => ({
				...prev,
				validFrom: validFromDate,
				validTo: validFromDate,
			}));
		} else {
			setCertificate((prev) => ({
				...prev,
				validFrom: validFromDate,
			}));
		}
	};

	const handleValidToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCertificate((prev) => ({
			...prev,
			validTo: new Date(e.target.value),
		}));
	};

	return (
		<div className="edit-certificate">
			<div className="edit-certificate-input-area">
				<div className="edit-certificate-inputs">
					<div className="edit-certificate-input">
						<label>{toSelectedLocale('supplier', language)}</label>
						<SupplierInputLookup
							certificate={certificate}
							setCertificate={setCertificate}
						/>
					</div>
					<div className="edit-certificate-input">
						<label>{toSelectedLocale('certificateType', language)}</label>
						<Select
							options={[
								{
									value: CertificateType.none,
									text: toSelectedLocale('selectOption', language),
								},
								{
									value: CertificateType.printingPermission,
									text: CertificateType.printingPermission,
								},
								{
									value: CertificateType.ohsas,
									text: CertificateType.ohsas,
								},
							]}
							value={certificate.type!}
							onChange={handleTypeChange}
						/>
					</div>
					<div className="edit-certificate-input">
						<label>{toSelectedLocale('validFrom', language)}</label>
						<div className="edit-certificate-input-container">
							<DatePicker
								value={toIsoString(certificate.validFrom!)}
								onChange={handleValidFromChange}
								min=""
							/>
						</div>
					</div>
					<div className="edit-certificate-input">
						<label>{toSelectedLocale('validTo', language)}</label>
						<div className="edit-certificate-input-container">
							<DatePicker
								value={toIsoString(certificate.validTo!)}
								onChange={handleValidToChange}
								min={toIsoString(certificate.validFrom!)}
							/>
						</div>
					</div>
				</div>
				<div className="pdf-preview-area">
					<PdfViewer
						fileUrl={fileURL}
						setFileUrl={setFileURL}
					/>
				</div>
			</div>
			<div className="edit-certificate-buttons-area">
				<Button
					name={toSelectedLocale('save', language)}
					color="white"
					bg="#c0cc38"
					type="button"
					onClick={handleSave}
					to=""
				/>
				<Button
					name={toSelectedLocale('reset', language)}
					color="black"
					bg="rgba(0,0,0,0)"
					type="button"
					to=""
					onClick={resetInput}
				/>
			</div>
		</div>
	);
};

export default CertificateDetails;
