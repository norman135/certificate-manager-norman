import { FC } from 'react';
import {
	toSelectedLocale,
	useLanguageContext,
} from '../../../common/contexts/language/Language';

interface PdfViewerProps {
	fileUrl?: string;
	setFileUrl: (file: string) => void;
}

const PdfViewer: FC<PdfViewerProps> = ({
	fileUrl,
	setFileUrl,
}): JSX.Element => {
	const { language } = useLanguageContext();

	const handlePDF = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];

		if (file) {
			const isPDF = file.name.toLowerCase().endsWith('.pdf');

			if (isPDF) {
				const reader = new FileReader();

				reader.onloadend = () => {
					const dataUrl = reader.result as string;
					setFileUrl(dataUrl);
				};

				reader.readAsDataURL(file);
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
				src={fileUrl}
				className="pdf-preview-iframe"
			/>
		</>
	);
};

export default PdfViewer;
