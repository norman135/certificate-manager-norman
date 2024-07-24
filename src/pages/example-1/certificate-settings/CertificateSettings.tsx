import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import certificates from '../certificates-mock-data';
import DropDown, {
	DropDownItem,
} from '../../../common/components/dropdown/DropDown';
import './CertificateSettings.css';
import AppRoutes from '../../../common/app-routes/AppRoutes';
import SettingsIcon from '../../../common/components/icons/SettingsIcon';

interface CertificateSettingsProps {
	certificateId: number;
	certificateIndex: number;
	update: () => void;
}

const CertificateSettings: FC<CertificateSettingsProps> = ({
	certificateId,
	certificateIndex,
	update,
}): JSX.Element => {
	const navigate = useNavigate();

	const deleteCertificate = (index: number): void => {
		certificates.splice(index, 1);
		update();
	};

    

	const certificateDropDown = (id: number, index: number): DropDownItem[] => {
        const handleEdit = () => {
        navigate(`${AppRoutes.EditCertificate}${id}`);
        }

        const handleDelete = () => {
            deleteCertificate(index);
        }
        
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
			<DropDown items={certificateDropDown(certificateId, certificateIndex)} />
		</button>
	);
};

export default CertificateSettings;
