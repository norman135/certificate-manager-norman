import Certificate, {
	PostCertificate,
	TableCertificate,
} from '../../models/certificate.model';
import Comment, { PostComment } from '../../models/comment.model';
import formatDate from '../../utils/format-date.utils';
import {
	CertificatesClient,
	CreateCertificateDTO,
	CreateCommentDTO,
} from '../generated';

const certificatesClient = new CertificatesClient();

const addCertificate = async (
	_postCertificate: PostCertificate,
): Promise<boolean> => {
	try {
		await certificatesClient.certificatesPOST(
			_postCertificate as CreateCertificateDTO,
		);
		return true;
	} catch (error) {
		console.error('Error adding certificate:', error);
		return false;
	}
};

const addComment = async (
	userId: string,
	certificateId: string,
	postComment: PostComment,
): Promise<boolean> => {
	try {
		const data = await certificatesClient.comments(
			certificateId,
			postComment as CreateCommentDTO,
		);

		if (data) {
			return true;
		} else {
			return false;
		}
	} catch (error) {
		console.error('Error adding comment: ', error);
		return false;
	}
};

const getCertificate = async (id: string): Promise<Certificate | null> => {
	try {
		const certificate = await certificatesClient.certificatesGET2(id);

		return certificate;
	} catch (error) {
		console.error('Error getting certificate:', error);
		return null;
	}
};

const updateCertificate = async (
	certificate: Certificate,
): Promise<boolean> => {
	try {
		await certificatesClient.certificatesPUT(certificate.handle, {
			supplierHandle: certificate.supplier.handle,
			certificateTypeHandle: certificate.certificateType.handle,
			validFrom: certificate.validFrom,
			validTo: certificate.validTo,
			document: certificate.document,
			participants: certificate.participants,
		});

		return true;
	} catch (error) {
		console.error('Error updating certificate:', error);
		return false;
	}
};

const deleteCertificate = async (id: string): Promise<boolean> => {
	try {
		await certificatesClient.certificatesDELETE(id);

		return true;
	} catch (error) {
		console.error('Error deleting certificate:', error);
		return false;
	}
};

const getAllCertificates = async (): Promise<TableCertificate[]> => {
	try {
		let certificates: TableCertificate[] =
			(await certificatesClient.certificatesGET()) ?? [];

		return certificates;
	} catch (error) {
		console.error('Error getting all certificates:', error);
		return [];
	}
};

export {
	certificatesClient,
	addCertificate,
	addComment,
	getCertificate,
	updateCertificate,
	deleteCertificate,
	getAllCertificates,
};
