import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
import initialCertificate, { handleSave } from '../../../common/utils/certificate.utils';

interface CertificateDetailsProps {
	certificateId?: number;
}

const CertificateDetails: FC <CertificateDetailsProps> = ({ certificateId }): JSX.Element => {

	const [certificate, setCertificate] = useState<Certificate>(initialCertificate(certificateId));
	const [fileURL, setFileURL] = useState<string>('');

	

	const resetInput = (): void => {
		setCertificate((prev) => ({
			...prev,
			supplier: '',
			type: CertificateType.none,
			validFrom: new Date('2000-01-01'),
			validTo: new Date('2000-01-01'),
		}));
	};

	const navigate = useNavigate();

	const goBack = (): void => {
		navigate(AppRoutes.Example1);
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
								onChange={(e) => {
									setCertificate((prev) => ({
										...prev,
										supplier: e.target.value,
									}));
								}}
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
								onChange={(e): void => {
									setCertificate((prev) => ({
										...prev,
										validFrom: new Date(e.target.value),
									}));
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
								onChange={(e): void => {
									setCertificate((prev) => ({
										...prev,
										validTo: new Date(e.target.value),
									}));
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
					onClick={() => {
						handleSave(certificateId, setCertificate, certificate);
						goBack();
					}}
					to=""
				/>
				<Button
					name="Reset"
					color="black"
					bg="rgba(0,0,0,0)"
					type="button"
					to=""
					onClick={() => {
						resetInput();
					}}
				/>
			</div>
		</div>
	);
};

export default CertificateDetails;
