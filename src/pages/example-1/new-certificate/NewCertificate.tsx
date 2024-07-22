import { FC, useState } from 'react';
import './NewCertificate.css';
import Button from '../../../common/components/button/Button';
import CancelIcon from '../../../common/components/icons/CancelIcon';
import SearchIcon from '../../../common/components/icons/SearchIcon';
import { CertificateType } from '../../../common/models/certificate.model';
import certificates from '../certificates-mock-data';
import { goBack } from './new-certificate';

const NewCertificate: FC = (): JSX.Element => {
	const [supplier, setSupplier] = useState<string>('');
	const [type, setType] = useState<string>(CertificateType.none);
	const [validFrom, setValidFrom] = useState<string>('2000-01-01');
	const [validTo, setValidTo] = useState<string>('2000-01-01');
	const [fileURL, setFileURL] = useState<string>('');

	const handleSave = (): void => {
		certificates.push({
			supplier: supplier,
			type: type,
			validFrom: new Date(validFrom),
			validTo: new Date(validTo),
		});
	};

	const resetInput = (): void => {
		setSupplier('');
		setType(CertificateType.none);
		setValidFrom('2000-01-01');
		setValidTo('2000-01-01');
		setFileURL('');
	};
	
	const handlePDF = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			const url = URL.createObjectURL(file);
			setFileURL(url);
		}
	};

	return (
		<div className="new-certificate">
			<div className="new-certificate-input-area">
				<div className="new-certificate-inputs">
					<div className="new-certificate-input">
						<label>Supplier</label>
						<div className="new-certificate-input-container">
							<input
								type="text"
								value={supplier}
								onChange={(e) => {
									setSupplier(e.target.value);
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
					<div className="new-certificate-input">
						<label>Certificate type</label>
						<select
							value={type}
							onChange={(e) => {
								setType(e.target.value);
							}}
						>
							<option value={CertificateType.none}>Select Your Option</option>
							<option value={CertificateType.printingPermission}>
								{CertificateType.printingPermission}
							</option>
							<option value={CertificateType.ohsas}>
								{CertificateType.ohsas}
							</option>
						</select>
					</div>
					<div className="new-certificate-input">
						<label>Valid from</label>
						<div className="new-certificate-input-container">
							<input
								type="date"
								placeholder="Click to Select Date"
								value={validFrom}
								onChange={(e) => {
									setValidFrom(e.target.value);
								}}
							/>
						</div>
					</div>
					<div className="new-certificate-input">
						<label>Valid to</label>
						<div className="new-certificate-input-container">
							<input
								type="date"
								placeholder="Click to Select Date"
								value={validTo}
								onChange={(e) => {
									setValidTo(e.target.value);
								}}
							/>
						</div>
					</div>
				</div>
				<div className="pdf-preview-area">
					<label
						htmlFor="nc-upload-file-button"
						className="button"
						style={{ backgroundColor: '#3f9ac9', color: 'white' }}
					>
						Upload
					</label>
					<input
						type="file"
						id="nc-upload-file-button"
						style={{ display: 'none' }}
						onChange={handlePDF}
					/>
					<iframe
						src={fileURL}
						className="pdf-preview-iframe"
					/>
				</div>
			</div>
			<div className="new-certificate-buttons-area">
				<Button
					name="Save"
					color="white"
					bg="#c0cc38"
					type="button"
					onClick={() => {
						handleSave();
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

export default NewCertificate;
