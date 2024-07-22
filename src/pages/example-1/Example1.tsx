import { FC } from 'react';
import certificates from './certificates-mock-data';
import AppRoutes from '../../common/app-routes/AppRoutes';
import Button from '../../common/components/button/Button';
import Table from '../../common/components/table/Table';
import formatDate from '../../common/utils/format-date.utils';
import './Example1.css';

const Example1: FC = (): JSX.Element => {
	const [change, setChange] = useState<number>(0);

	const deleteCertificate = (index: number) => {
		certificates.splice(index);
		setChange(change + 1);
	}

	const certificateDropDown = (id: number, index: number): DropDownItem[] => {
		const navigate = useNavigate();
	
		return [
			{
				name: "Edit",
				action: () => {navigate(`/edit-certificate/${id}`)}
			},
			{
				name: "Delete",
				action: () => {deleteCertificate(index)}
			}
		]
	}

	return (
		<>
			<Button
				name="New Certificate"
				bg="#c0cc38"
				color="white"
				type="link"
				to={AppRoutes.NewCertificate}
				onClick={() => {}}
			/>
			<div className="certificates-table">
				<Table
					columns={['Supplier', 'Type', 'Valid from', 'Valid to']}
					data={certificates.map((certificate) => [
						certificate.supplier,
						certificate.type,
						formatDate(certificate.validFrom),
						formatDate(certificate.validTo),
					])}
				/>
			</div>
		</>
	);
};

export default Example1;
