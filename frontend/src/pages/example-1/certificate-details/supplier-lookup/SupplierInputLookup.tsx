import { Dispatch, FC, useState } from 'react';
import { CertificateDTO, SupplierDTO } from '../../../../common/api';
import CancelIcon from '../../../../common/components/icons/CancelIcon';
import SearchIcon from '../../../../common/components/icons/SearchIcon';
import SupplierLookup from '../../../../common/components/supplier-lookup/SupplierLookup';
import { initialSupplier } from '../../../../common/utils/supplier.utils';

interface SupplierInputLookupProps {
	certificate: CertificateDTO;
	setCertificate: Dispatch<React.SetStateAction<CertificateDTO>>;
}

const SupplierInputLookup: FC<SupplierInputLookupProps> = ({
	certificate,
	setCertificate,
}): JSX.Element => {
	const [isSearchDialogOpen, setIsSearchDialogOpen] = useState<boolean>(false);

	const displaySupplierName = (_certificate: CertificateDTO): string => {
		return `${_certificate.supplier!.name}, ${_certificate.supplier!.index}, ${_certificate.supplier!.city}`;
	};

	const openSearchDialog = (): void => {
		setIsSearchDialogOpen(true);
	};

	const closeSearchDialog = (): void => {
		setIsSearchDialogOpen(false);
	};

	const selectSupplier = (supplier: SupplierDTO): void => {
		setCertificate((prev) => ({
			...prev,
			supplier: supplier as SupplierDTO,
		}));
	};

	const clearSupplier = (): void => {
		selectSupplier(initialSupplier);
	};

	return (
		<div className="edit-certificate-input-container">
			<input
				type="text"
				value={
					certificate.supplier!.index === initialSupplier.index
						? 'Select a Supplier'
						: displaySupplierName(certificate)
				}
				disabled
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
