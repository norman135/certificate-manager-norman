import Certificate from '../models/certificate.model';
import certificateTypes from './certificate-type-mock-data';
import suppliers from './suppliers-mock-data';
import users from './users-mock-data';

const openDatabase = () => {
	return new Promise<IDBDatabase>((resolve, reject) => {
		const request = indexedDB.open('CertificatesDataBase', 1);

		request.onupgradeneeded = (event) => {
			const db = (event.target as IDBOpenDBRequest).result;
			console.log(db.objectStoreNames);
			if (!db.objectStoreNames.contains('certificates')) {
				db.createObjectStore('certificates', { keyPath: 'id' });
			}
			if (!db.objectStoreNames.contains('suppliers')) {
				db.createObjectStore('suppliers', { keyPath: 'id' });
			}
			if (!db.objectStoreNames.contains('certificate-types')) {
				db.createObjectStore('certificate-types', { keyPath: 'id' });
			}
			if (!db.objectStoreNames.contains('users')) {
				db.createObjectStore('users', { keyPath: 'id' });
			}
		};

		request.onsuccess = () => {
			resolve(request.result);
		};

		request.onerror = () => {
			reject(request.error);
		};
	});
};

const addItem = async (item: Certificate) => {
	const db = await openDatabase();
	const transaction = db.transaction('certificates', 'readwrite');
	const store = transaction.objectStore('certificates');
	store.add(item);
	return transaction.oncomplete;
};

const getItem = async (id: string) => {
	const db = await openDatabase();
	const transaction = db.transaction('certificates', 'readonly');
	const store = transaction.objectStore('certificates');
	return store.get(id);
};

const updateItem = async (item: Certificate) => {
	const db = await openDatabase();
	const transaction = db.transaction('certificates', 'readwrite');
	const store = transaction.objectStore('certificates');
	store.put(item);
	return transaction.oncomplete;
};

const deleteItem = async (id: string) => {
	const db = await openDatabase();
	const transaction = db.transaction('certificates', 'readwrite');
	const store = transaction.objectStore('certificates');
	store.delete(id);
	return transaction.oncomplete;
};

const getAllItems = async (category: string) => {
	const db = await openDatabase();
	const transaction = db.transaction(category, 'readonly');
	const store = transaction.objectStore(category);
	return store.getAll();
};

const setUpDatabase = async () => {
	for (let i = 0; i < suppliers.length; i++) {
		const db = await openDatabase();
		const transaction = db.transaction('suppliers', 'readwrite');
		const store = transaction.objectStore('suppliers');
		store.add(suppliers[i]);
	}

	for (let i = 0; i < certificateTypes.length; i++) {
		const db = await openDatabase();
		const transaction = db.transaction('certificate-types', 'readwrite');
		const store = transaction.objectStore('certificate-types');
		store.add(certificateTypes[i]);
	}

	for (let i = 0; i < users.length; i++) {
		const db = await openDatabase();
		const transaction = db.transaction('users', 'readwrite');
		const store = transaction.objectStore('users');
		store.add(users[i]);
	}
};

setUpDatabase();

export { addItem, getItem, updateItem, deleteItem, getAllItems };
