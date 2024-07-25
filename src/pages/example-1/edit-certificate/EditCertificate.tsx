import { FC } from 'react';
import { useParams } from 'react-router-dom';
import CertificateDetails from '../certificate-details/CertificateDetails';

const EditCertificate: FC = (): JSX.Element => {
	const { certificateId } = useParams<{ certificateId: string }>();
	return <CertificateDetails certificateId={certificateId} />;
};

export default EditCertificate;
