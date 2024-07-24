import { FC } from 'react';
import { useParams } from 'react-router-dom';
import CertificateDetails from '../certificate-details/CertificateDetails';

const EditCertificate: FC = (): JSX.Element => {
	const { certificateId } = useParams<{ certificateId: string }>();
	const certificateIdNum: number = certificateId ? parseInt(certificateId): NaN;
	
	return (
		<CertificateDetails
			certificateId={certificateIdNum}
		/>
	)
	};

export default EditCertificate;
