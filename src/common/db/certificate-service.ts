import Certificate from '../models/certificate.model';
import { addItem, getItem, updateItem, deleteItem, getAllItems } from './db';

const addCertificate = async (item: Certificate): Promise<boolean> => {
	try {
		await addItem(item);
		return true;
	} catch (error) {
		console.error('Error adding certificate:', error);
		return false;
	}
};

const getCertificate = async (id: number): Promise<Certificate | null> => {
	try {
		const request = await getItem(id);
		return new Promise<Certificate | null>((resolve, reject) => {
			request.onsuccess = () => {
				resolve(request.result as Certificate);
			};
			request.onerror = () => {
				reject(request.error);
			};
		});
	} catch (error) {
		console.error('Error getting certificate:', error);
		return null;
	}
};

const updateCertificate = async (item: Certificate): Promise<boolean> => {
	try {
		await updateItem(item);
		return true;
	} catch (error) {
		console.error('Error updating certificate:', error);
		return false;
	}
};

const deleteCertificate = async (id: number): Promise<boolean> => {
	try {
		await deleteItem(id);
		return true;
	} catch (error) {
		console.error('Error deleting certificate:', error);
		return false;
	}
};

const getAllCertificates = async (): Promise<Certificate[]> => {
	try {
		const request = await getAllItems();
		return new Promise<Certificate[]>((resolve, reject) => {
			request.onsuccess = () => {
				resolve(request.result as Certificate[]);
			};
			request.onerror = () => {
				reject(request.error);
			};
		});
	} catch (error) {
		console.error('Error getting all certificates:', error);
		return [];
	}
};

export {
	addCertificate,
	getCertificate,
	updateCertificate,
	deleteCertificate,
	getAllCertificates,
};
