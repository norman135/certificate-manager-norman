import { FC, useState } from 'react';
import {
	toSelectedLocale,
	useLanguageContext,
} from '../../../common/contexts/language/Language';

interface PdfViewerProps {
	fileUrl?: string;
	setFileUrl: (file: string) => void;
}

const PdfViewer: FC<PdfViewerProps> = ({
	fileUrl = '',
	setFileUrl,
}): JSX.Element => {
	const [dataUrl, setDataUrl] = useState<string>('');
	const { language } = useLanguageContext();

	const base64ToUint8Array = (base64: string): Uint8Array => {
		const binaryString = window.atob(base64);
		const length = binaryString.length;
		const uint8Array = new Uint8Array(length);
		for (let i = 0; i < length; i++) {
			uint8Array[i] = binaryString.charCodeAt(i);
		}

		return uint8Array;
	};

	const uint8ArrayDocumentToDataURL = (
		byteArray: Uint8Array,
	): Promise<string> => {
		return new Promise((resolve) => {
			const blob = new Blob([byteArray], { type: 'application/pdf' });

			const reader = new FileReader();

			reader.onloadend = () => {
				if (reader.result) {
					resolve(reader.result as string);
				} else {
					console.error("Can't get document data.");
				}
			};

			reader.readAsDataURL(blob);
		});
	};

	if (fileUrl != '') {
		uint8ArrayDocumentToDataURL(base64ToUint8Array(fileUrl)).then(
			(dataUrlString) => {
				setDataUrl(dataUrlString);
			},
		);
	}
	const handlePDF = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];

		if (file) {
			const isPDF = file.name.toLowerCase().endsWith('.pdf');

			if (isPDF) {
				const reader = new FileReader();

				reader.onloadend = async () => {
					if (reader.result) {
						const data = new Uint8Array(reader.result as ArrayBuffer);

						let binary = '';
						data.forEach((byte) => {
							binary += String.fromCharCode(byte);
						});

						const dataString: string = window.btoa(binary);

						setFileUrl(dataString);
					} else {
						console.error("Can't read PDF document.");
					}
				};

				reader.readAsArrayBuffer(file);
			} else {
				alert('Please select a PDF file!');
			}
		}
	};

	return (
		<>
			<label
				htmlFor="nc-upload-file-button"
				className="button"
				style={{ backgroundColor: '#3f9ac9', color: 'white' }}
			>
				{toSelectedLocale('upload', language)}
			</label>
			<input
				type="file"
				id="nc-upload-file-button"
				style={{ display: 'none' }}
				onChange={handlePDF}
			/>
			<iframe
				title={'Pdf Viewer'}
				src={dataUrl}
				className="pdf-preview-iframe"
			/>
		</>
	);
};

export default PdfViewer;
