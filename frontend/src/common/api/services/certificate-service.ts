import Certificate from '../../models/certificate.model';
import UserComment from '../../models/comment.model';
import {
	CertificateDTO,
	CertificateAddDTO,
	CertificateUpdateDTO,
	TableCertificateDTO,
} from '../../models/dtos/certificate-dto';
import { CertificateMapper } from '../../utils/mappers/certificate-mapper';
import { CommentMapper } from '../../utils/mappers/comment-mapper';
import { addItem, getItem, updateItem, deleteItem, getAllItems } from '../api';

const addCertificate = async (certificate: Certificate): Promise<boolean> => {
	try {
		await addItem('certificates', CertificateMapper.ToAddDTO(certificate));
		return true;
	} catch (error) {
		console.error('Error adding certificate:', error);
		return false;
	}
};

const addComment = async (
	userId: string,
	certificateId: string,
	comment: UserComment,
): Promise<boolean> => {
	try {
		await addItem(
			`certificates/${certificateId}/comments`,
			CommentMapper.ToDTO(comment, userId),
		);

		return true;
	} catch (error) {
		console.error('Error adding comment: ', error);
		return false;
	}
};

const getCertificate = async (id: string): Promise<Certificate | null> => {
	try {
		const certificateDTO: CertificateDTO = await getItem('certificates', id);

		return CertificateMapper.ToModel(certificateDTO);
	} catch (error) {
		console.error('Error getting certificate:', error);
		return null;
	}
};

const updateCertificate = async (
	certificate: Certificate,
): Promise<boolean> => {
	try {
		await updateItem(
			'certificates',
			certificate.id,
			CertificateMapper.ToUpdateDTO(certificate),
		);
		return true;
	} catch (error) {
		console.error('Error updating certificate:', error);
		return false;
	}
};

const deleteCertificate = async (id: string): Promise<boolean> => {
	try {
		await deleteItem('certificates', id);
		return true;
	} catch (error) {
		console.error('Error deleting certificate:', error);
		return false;
	}
};

const getAllCertificates = async (): Promise<TableCertificateDTO[]> => {
	try {
		let certificates: TableCertificateDTO[];

		certificates = await getAllItems('certificates');

		if (certificates) {
			return certificates;
		} else {
			return [];
		}
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
