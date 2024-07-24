import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CertificateDetails.css';
import AppRoutes from '../../../common/app-routes/AppRoutes';
import Button from '../../../common/components/button/Button';
import CancelIcon from '../../../common/components/icons/CancelIcon';
import SearchIcon from '../../../common/components/icons/SearchIcon';
import Certificate, {
	CertificateType,
} from '../../../common/models/certificate.model';
import certificates from '../certificates-mock-data';
import DatePicker from '../../../common/date-picker/DatePicker';
import Select from '../../../common/select/Select';
import PdfViewer from '../pdf-viewer/PdfViewer';
import { toIsoString } from '../../../common/utils/format-date.utils';
import initialCertificate, {
	getCertificateIndex,
} from '../../../common/utils/certificate.utils';

interface CertificateDetailsProps {
	certificateId?: number;
}

const CertificateDetails: FC<CertificateDetailsProps> = ({
	certificateId,
}): JSX.Element => {
	const [certificate, setCertificate] =
		useState<Certificate>(initialCertificate);
	const [fileURL, setFileURL] = useState<string>('');

	const navigate = useNavigate();

	const goBack = (): void => {
		navigate(AppRoutes.Example1);
	};

	useEffect(() => {
		if (certificateId) {
			const certificateIndex: number = getCertificateIndex(certificateId);
			setCertificate(certificates[certificateIndex]);
		} else {
			setCertificate(initialCertificate);
			setCertificate((prev) => ({
				...prev,
				id: certificates.length + 1,
			}));
		}
	}, [certificateId]);

	const handleSave = (): void => {
		if (certificateId) {
			const certificateIndex: number = getCertificateIndex(certificateId);
			certificates[certificateIndex] = certificate;
			setCertificate(initialCertificate);
		} else {
			certificates.push(certificate);
		}
		goBack();
	};

	const resetInput = (): void => {
		setCertificate(initialCertificate);
	};

	const handleSupplierChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCertificate((prev) => ({
			...prev,
			supplier: e.target.value,
		}));
	};

	const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCertificate((prev) => ({
			...prev,
			type: e.target.value,
		}));
	};

	const handleValidFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCertificate((prev) => ({
			...prev,
			validFrom: new Date(e.target.value),
		}));
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
						<label>Supplier</label>
						<div className="edit-certificate-input-container">
							<input
								type="text"
								value={certificate.supplier}
								onChange={(e) => handleSupplierChange(e)}
							/>
							<button>
								<SearchIcon
									width={24}
									height={24}
								/>
							</button>
							<button>
								<CancelIcon
									width={12}
									height={12}
								/>
							</button>
						</div>
					</div>
					<div className="edit-certificate-input">
						<label>Certificate type</label>
						<Select
							options={[
								{
									value: CertificateType.none,
									text: 'Select Your Option',
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
							value={certificate.type}
							onChange={(e) => {
								setCertificate((prev) => ({
									...prev,
									type: e.target.value,
								}));
							}}
						/>
					</div>
					<div className="edit-certificate-input">
						<label>Valid from</label>
						<div className="edit-certificate-input-container">
							<DatePicker
								value={toIsoString(certificate.validFrom)}
								onChange={(e) => {
									handleValidFromChange(e);
								}}
								min=""
							/>
						</div>
					</div>
					<div className="edit-certificate-input">
						<label>Valid to</label>
						<div className="edit-certificate-input-container">
							<DatePicker
								value={toIsoString(certificate.validTo)}
								onChange={(e) => {
									handleValidToChange(e);
								}}
								min={toIsoString(certificate.validFrom)}
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
					name="Save"
					color="white"
					bg="#c0cc38"
					type="button"
					onClick={handleSave}
					to=""
				/>
				<Button
					name="Reset"
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
