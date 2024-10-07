import { FC, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './CertificateDetails.css';
import CommentSection from './comment-section/CommentSection';
import SupplierInputLookup from './supplier-lookup/SupplierInputLookup';
import AppRoutes from '../../../common/app-routes/AppRoutes';
import Button from '../../../common/components/button/Button';
import DatePicker from '../../../common/components/date-picker/DatePicker';
import SearchIcon from '../../../common/components/icons/SearchIcon';
import Select from '../../../common/components/select/Select';
import Table from '../../../common/components/table/Table';
import UserLookup from '../../../common/components/user-lookup/UserLookup';
import {
	CertificateDTO,
	CertificatesPostRequest,
	CertificateTypeDTO,
	CommentDTO,
	CreateCommentDTO,
	UserDTO,
} from '../../../common/api';
import { useApiClientContext } from '../../../common/contexts/api-client/ApiClient';
import {
	toSelectedLocale,
	useLanguageContext,
} from '../../../common/contexts/language/Language';
import { useCurrentUserContext } from '../../../common/contexts/user/User';
import initialCertificate from '../../../common/utils/certificate.utils';
import PdfViewer from '../pdf-viewer/PdfViewer';

interface CertificateDetailsProps {
	certificateId?: string;
}

const CertificateDetails: FC<CertificateDetailsProps> = ({
	certificateId,
}): JSX.Element => {
	const [certificate, setCertificate] =
		useState<CertificateDTO>(initialCertificate);
	const [certificateTypes, setCertificateTypes] = useState<
		CertificateTypeDTO[]
	>([initialCertificate.certificateType as CertificateTypeDTO]);
	const [isUserDialogOpen, setIsUserDialogOpen] = useState<boolean>(false);
	const [loader, setLoader] = useState<boolean>(true);

	const { language } = useLanguageContext();
	const { user } = useCurrentUserContext();
	const { certificateClient, basicDataClient } = useApiClientContext();

	const goBack = (): void => {
		window.location.href = AppRoutes.Example1;
	};

	useEffect(() => {
		const fetchBasicData = async () => {
			const _certificateTypes = await basicDataClient.certificatesTypesGet();

			const _allCertificateTypes = certificateTypes.concat(_certificateTypes);

			setCertificateTypes(_allCertificateTypes);
		};

		fetchBasicData();

		if (certificateId) {
			const fetchCertificate = async () => {
				const _cert = await certificateClient.certificatesHandleGet({
					handle: certificateId,
				});

				if (_cert) {
					setCertificate(_cert);
				} else {
					console.error('Error retrieving certificate.');
				}

				setLoader(false);
			};

			fetchCertificate();
		} else {
			setLoader(false);
		}
	}, [certificateId]);

	const handleSave = (): void => {
		if (!validateForm()) {
			return;
		}

		if (certificateId) {
			const updateCert = async () => {
				try {
					await certificateClient.certificatesHandlePut({
						handle: certificate.handle ?? '',
						updateCertificateDTO: {
							supplierHandle: certificate.supplier?.handle,
							certificateTypeHandle: certificate.certificateType?.handle,
							validFrom: certificate.validFrom,
							validTo: certificate.validTo,
							document: certificate.document,
							participants: certificate.participants,
						},
					});
				} catch {
					console.error('Error attempting to update certificate.');
					return;
				}
			};

			updateCert();
		} else {
			const addCert = async () => {
				try {
					await certificateClient.certificatesPost({
						createCertificateDTO: {
							supplierHandle: certificate.supplier?.handle,
							certificateTypeHandle: certificate.certificateType?.handle,
							validFrom: certificate.validFrom,
							validTo: certificate.validTo,
							document: certificate.document,
						},
					} as CertificatesPostRequest);
				} catch {
					console.error('Error attempting to add certificate');
					return;
				}
			};

			addCert();
		}

		goBack();
	};

	const resetInput = (): void => {
		const _cert = initialCertificate;
		if (certificateId) {
			_cert.handle = certificateId;
		}
		setCertificate(_cert);
	};
	const openUserDialog = () => {
		setIsUserDialogOpen(true);
	};

	const closeUserDialog = () => {
		setIsUserDialogOpen(false);
	};

	const selectUsers = (users: UserDTO[]) => {
		setCertificate((prev) => ({
			...prev,
			participants: users,
		}));
	};

	const removeUser = (position: number | number[]) => {
		const users = certificate.participants;

		if (users) {
			selectUsers(
				users.filter((user, index) => (index != position ? user : null)),
			);
		}
	};

	const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setCertificate((prev) => ({
			...prev,
			certificateType: {
				handle: e.target.value,
			} as CertificateTypeDTO,
		}));
	};

	const handleValidFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const validFromDate = new Date(e.target.value);

		if (validFromDate > new Date(certificate.validTo ?? '')) {
			setCertificate((prev) => ({
				...prev,
				validFrom: e.target.value,
				validTo: e.target.value,
			}));
		} else {
			setCertificate((prev) => ({
				...prev,
				validFrom: e.target.value,
			}));
		}
	};

	const handleValidToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCertificate((prev) => ({
			...prev,
			validTo: e.target.value,
		}));
	};

	const handlePdfChange = (file: string) => {
		setCertificate((prev) => ({
			...prev,
			document: file,
		}));
	};

	const validateForm = (): boolean => {
		if (certificate.supplier === initialCertificate.supplier) {
			alert(toSelectedLocale('chooseSupplier', language));
			return false;
		}
		if (
			certificate.certificateType?.handle ===
			initialCertificate.certificateType?.handle
		) {
			alert(toSelectedLocale('chooseType', language));
			return false;
		}
		if (certificate.document === initialCertificate.document) {
			alert(toSelectedLocale('addPdf', language));
			return false;
		}
		return true;
	};

	const addCertificateComment = async (comment: CreateCommentDTO) => {
		if (
			await certificateClient.certificatesHandleCommentsPost({
				handle: certificate.handle ?? '',
				createCommentDTO: {
					userHandle: user.handle ?? '',
					commentText: comment.commentText ?? '',
				},
			})
		) {
			const _comments: CommentDTO[] = certificate.comments ?? [];
			_comments.push({
				userName: user.name,
				comment: comment.commentText,
			});

			setCertificate((prev) => ({
				...prev,
				comments: _comments,
			}));
		} else {
			console.error('Error adding comment.');
		}
	};

	const userTableData = certificate.participants
		? certificate.participants.map((user) => ({
				name: user.name,
				department: user.department,
				email: user.email,
			}))
		: [];

	return (
		<div className="edit-certificate">
			{loader ? (
				'Loading...'
			) : (
				<>
					<div className="edit-certificate-input-area">
						<div className="edit-certificate-inputs">
							<div className="edit-certificate-input">
								<label>{toSelectedLocale('supplier', language)}</label>
								<SupplierInputLookup
									certificate={certificate}
									setCertificate={setCertificate}
								/>
							</div>
							<div className="edit-certificate-input">
								<label>{toSelectedLocale('certificateType', language)}</label>
								<Select
									options={certificateTypes.map((type) => ({
										value: type.handle ?? '',
										text: type.name ?? '',
									}))}
									value={certificate.certificateType?.handle ?? ''}
									onChange={handleTypeChange}
								/>
							</div>
							<div className="edit-certificate-input">
								<label>{toSelectedLocale('validFrom', language)}</label>
								<div className="edit-certificate-input-container">
									<DatePicker
										value={certificate.validFrom ?? ''}
										onChange={handleValidFromChange}
										min=""
									/>
								</div>
							</div>
							<div className="edit-certificate-input">
								<label>{toSelectedLocale('validTo', language)}</label>
								<div className="edit-certificate-input-container">
									<DatePicker
										value={certificate.validTo ?? ''}
										onChange={handleValidToChange}
										min={certificate.validFrom ?? ''}
									/>
								</div>
							</div>
							{certificateId ? (
								<>
									<div className="edit-certificate-input-container">
										<div className="edit-certificate-input">
											{isUserDialogOpen ? (
												<UserLookup
													closeSearch={closeUserDialog}
													selectUsers={selectUsers}
												/>
											) : null}
										</div>
									</div>
									<div className="users-table">
										<div className="edit-certificate-input">
											<label>
												{toSelectedLocale('assignedUsers', language)}
											</label>
											<Button
												name={
													<>
														<SearchIcon
															width={24}
															height={24}
														/>
														{toSelectedLocale('addParticipants', language)}
													</>
												}
												color="black"
												bg="white"
												type="button"
												onClick={openUserDialog}
											/>
										</div>
										<Table
											columns={[
												'',
												'Name',
												toSelectedLocale('department', language),
												toSelectedLocale('email', language),
											]}
											data={userTableData}
											type="delete"
											selectable
											onSelect={removeUser}
										/>
									</div>
								</>
							) : null}
							{certificateId ? (
								<CommentSection
									comments={certificate.comments ?? []}
									user={user}
									addComment={addCertificateComment}
								/>
							) : null}
						</div>
						<div className="pdf-preview-area">
							<PdfViewer
								fileUrl={certificate.document ?? undefined}
								setFileUrl={handlePdfChange}
							/>
						</div>
					</div>
					<div className="edit-certificate-buttons-area">
						<Button
							name={toSelectedLocale('save', language)}
							color="white"
							bg="#c0cc38"
							type="button"
							onClick={handleSave}
							to=""
						/>
						<Button
							name={toSelectedLocale('reset', language)}
							color="black"
							bg="rgba(0,0,0,0)"
							type="button"
							to=""
							onClick={resetInput}
						/>
					</div>
				</>
			)}
		</div>
	);
};

export default CertificateDetails;
