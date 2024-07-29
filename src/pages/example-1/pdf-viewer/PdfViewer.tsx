import { FC } from 'react';
import {
	LanguageContext,
	Languages,
	toSelectedLocale,
	useLanguageContext,
} from '../../../common/language/Language';

interface PdfViewerProps {
	fileUrl: string;
	setFileUrl: React.Dispatch<React.SetStateAction<string>>;
}

const PdfViewer: FC<PdfViewerProps> = ({
	fileUrl,
	setFileUrl,
}): JSX.Element => {
	const { language } = useLanguageContext();
	const handlePDF = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			const url = URL.createObjectURL(file);
			setFileUrl(url);
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
				title={fileUrl}
				src={fileUrl}
				className="pdf-preview-iframe"
			/>
		</>
	);
};

export default PdfViewer;
