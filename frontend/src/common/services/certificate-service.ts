import { CertificateApi } from '../contexts/api-client/apis';
import {
	CertificateDTO,
	CreateCertificateDTO,
	CreateCommentDTO,
	TableCertificatesDTO,
} from '../contexts/api-client/models';

const addCertificate = async (
	certificateClient: CertificateApi,
	_postCertificate: CreateCertificateDTO,
): Promise<boolean> => {
	try {
		await certificateClient.certificatesPost({
			createCertificateDTO: _postCertificate,
		});
		return true;
	} catch (error) {
		console.error('Error adding certificate:', error);
		return false;
	}
};

const addComment = async (
	certificateClient: CertificateApi,
	userId: string,
	certificateId: string,
	postComment: CreateCommentDTO,
): Promise<boolean> => {
	try {
		const data = await certificateClient.certificatesHandleCommentsPost({
			handle: certificateId,
			createCommentDTO: {
				userHandle: userId,
				commentText: postComment.commentText,
			},
		});

		if (data != null) {
			return true;
		}
		return false;
	} catch (error) {
		console.error('Error adding comment: ', error);
		return false;
	}
};

const getCertificate = async (
	certificateClient: CertificateApi,
	id: string,
): Promise<CertificateDTO | null> => {
	try {
		const certificate = await certificateClient.certificatesHandleGet({
			handle: id,
		});

		return certificate;
	} catch (error) {
		console.error('Error getting certificate:', error);
		return null;
	}
};

const updateCertificate = async (
	certificateClient: CertificateApi,
	certificate: CertificateDTO,
): Promise<boolean> => {
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

		return true;
	} catch (error) {
		console.error('Error updating certificate:', error);
		return false;
	}
};

const deleteCertificate = async (
	certificateClient: CertificateApi,
	id: string,
): Promise<boolean> => {
	try {
		await certificateClient.certificatesHandleDelete({
			handle: id,
		});

		return true;
	} catch (error) {
		console.error('Error deleting certificate:', error);
		return false;
	}
};

const getAllCertificates = async (
	certificateClient: CertificateApi,
): Promise<TableCertificatesDTO[]> => {
	try {
		const certificates: TableCertificatesDTO[] =
			await certificateClient.certificatesGet();

		return certificates;
	} catch (error) {
		console.error('Error getting all certificates:', error);
		return [];
	}
};

export {
	addCertificate,
	addComment,
	getCertificate,
	updateCertificate,
	deleteCertificate,
	getAllCertificates,
};
