import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import AppRoutes from '../../../common/app-routes/AppRoutes';
import DropDown, {
	DropDownItem,
} from '../../../common/components/dropdown/DropDown';
import './CertificateSettings.css';
import SettingsIcon from '../../../common/components/icons/SettingsIcon';
import { useApiClientContext } from '../../../common/contexts/api-client/ApiClient';
import {
	toSelectedLocale,
	useLanguageContext,
} from '../../../common/contexts/language/Language';

interface CertificateSettingsProps {
	certificateId: string;
	update: () => void;
}

const CertificateSettings: FC<CertificateSettingsProps> = ({
	certificateId,
	update,
}): JSX.Element => {
	const { language } = useLanguageContext();
	const { certificateClient } = useApiClientContext();

	const navigate = useNavigate();

	const _deleteCertificate = (id: string): void => {
		if (confirm(toSelectedLocale('sure', language))) {
			const deleteCert = async (): Promise<void> => {
				try {
					await certificateClient.certificatesHandleDelete({ handle: id });
				} catch {
					console.error('Error deleting certificate!');
				}
			};

			deleteCert();
			update();
		}
	};

	const certificateDropDown = (id: string): DropDownItem[] => {
		const handleEdit = (): void => {
			navigate(`${AppRoutes.EditCertificate}${id}`);
		};

		const handleDelete = (): void => {
			_deleteCertificate(id);
		};

		return [
			{
				name: toSelectedLocale('edit', language),
				action: handleEdit,
			},
			{
				name: toSelectedLocale('delete', language),
				action: handleDelete,
			},
		];
	};

	return (
		<button
			key={certificateId}
			className="certificate-edit-button"
		>
			<SettingsIcon
				width={32}
				height={32}
			/>
			<DropDown items={certificateDropDown(certificateId)} />
		</button>
	);
};

export default CertificateSettings;
