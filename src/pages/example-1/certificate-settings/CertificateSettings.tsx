import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import DropDown, {
	DropDownItem,
} from '../../../common/components/dropdown/DropDown';
import './CertificateSettings.css';
import AppRoutes from '../../../common/app-routes/AppRoutes';
import SettingsIcon from '../../../common/components/icons/SettingsIcon';
import { deleteCertificate } from '../../../common/db/certificate-service';

interface CertificateSettingsProps {
	certificateId: string;
	update: () => void;
}

const CertificateSettings: FC<CertificateSettingsProps> = ({
	certificateId,
	update,
}): JSX.Element => {
	const navigate = useNavigate();

	const _deleteCertificate = (id: string): void => {
		if (confirm('Are you sure?')) {
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
				name: 'Edit',
				action: handleEdit,
			},
			{
				name: 'Delete',
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
