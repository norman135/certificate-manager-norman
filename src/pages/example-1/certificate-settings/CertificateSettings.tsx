import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import DropDown, {
	DropDownItem,
} from '../../../common/components/dropdown/DropDown';
import './CertificateSettings.css';
import AppRoutes from '../../../common/app-routes/AppRoutes';
import SettingsIcon from '../../../common/components/icons/SettingsIcon';
import { deleteCertificate } from '../../../common/db/certificate-service';
import {
	Languages,
	useLanguageContext,
} from '../../../common/language/Language';

interface CertificateSettingsProps {
	certificateId: string;
	update: () => void;
}

const CertificateSettings: FC<CertificateSettingsProps> = ({
	certificateId,
	update,
}): JSX.Element => {
	const { language } = useLanguageContext();

	const navigate = useNavigate();

	const _deleteCertificate = (id: string): void => {
		if (
			confirm(
				language === Languages.English ? 'Are you sure?' : 'Bist du sicher?',
			)
		) {
			const deleteCert = async () => {
				if (!(await deleteCertificate(id))) {
					console.log('Error deleting certificate!');
				}
			};

			deleteCert();
			update();
		}
	};

	const certificateDropDown = (id: string): DropDownItem[] => {
		const handleEdit = () => {
			navigate(`${AppRoutes.EditCertificate}${id}`);
		};

		const handleDelete = () => {
			_deleteCertificate(id);
		};

		return [
			{
				name: language === Languages.English ? 'Edit' : 'Bearbeiten',
				action: handleEdit,
			},
			{
				name: language === Languages.English ? 'Delete' : 'Löschen',
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
