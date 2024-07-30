import { Dispatch, FC, useState } from 'react';
import Certificate from '../../../../common/models/certificate.model';
import { initialSupplier } from '../../../../common/utils/supplier.utils';
import SearchIcon from '../../../../common/components/icons/SearchIcon';
import CancelIcon from '../../../../common/components/icons/CancelIcon';
import SupplierLookup from '../../../../common/components/supplier-user-lookup/SupplierLookup';
import Supplier from '../../../../common/models/supplier.model';

interface SupplierInputLookupProps {
	certificate: Certificate;
	setCertificate: Dispatch<React.SetStateAction<Certificate>>;
}

const SupplierInputLookup: FC<SupplierInputLookupProps> = ({
	certificate,
	setCertificate,
}): JSX.Element => {
	const [isSearchDialogOpen, setIsSearchDialogOpen] = useState<boolean>(false);

	const displaySupplierName = (certificate: Certificate) => {
		return `${certificate.supplier!.name}, ${certificate.supplier!.indexValue}, ${certificate.supplier!.city}`;
	};

	const openSearchDialog = () => {
		setIsSearchDialogOpen(true);
	};

	const closeSearchDialog = () => {
		setIsSearchDialogOpen(false);
	};

	const selectSupplier = (supplier: Supplier) => {
		setCertificate((prev) => ({
			...prev,
			supplier: supplier as Supplier,
		}));
	};

	const clearSupplier = () => {
		selectSupplier(initialSupplier);
	};

	return (
		<div className="edit-certificate-input-container">
			<input
				type="text"
				value={
					certificate.supplier!.indexValue === initialSupplier.indexValue
						? 'Select a Supplier'
						: displaySupplierName(certificate)
				}
				disabled={true}
				style={{
					cursor: 'not-allowed',
				}}
			/>
			<button onClick={openSearchDialog}>
				<SearchIcon
					width={24}
					height={24}
				/>
			</button>
			<button onClick={clearSupplier}>
				<CancelIcon
					width={12}
					height={12}
				/>
			</button>
			{isSearchDialogOpen ? (
				<SupplierLookup
					closeSearch={closeSearchDialog}
					selectSupplier={selectSupplier}
				/>
			) : null}
		</div>
	);
};

export default SupplierInputLookup;
