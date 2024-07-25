import Certificate from '../models/certificate.model';

const openDatabase = () => {
	return new Promise<IDBDatabase>((resolve, reject) => {
		const request = indexedDB.open('CertificatesDataBase', 1);

		request.onupgradeneeded = (event) => {
			const db = (event.target as IDBOpenDBRequest).result;
			if (!db.objectStoreNames.contains('certificates')) {
				db.createObjectStore('certificates', { keyPath: 'id' });
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

const getItem = async (id: number) => {
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

const deleteItem = async (id: number) => {
	const db = await openDatabase();
	const transaction = db.transaction('certificates', 'readwrite');
	const store = transaction.objectStore('certificates');
	store.delete(id);
	return transaction.oncomplete;
};

const getAllItems = async () => {
	const db = await openDatabase();
	const transaction = db.transaction('certificates', 'readonly');
	const store = transaction.objectStore('certificates');
	return store.getAll();
};

export { addItem, getItem, updateItem, deleteItem, getAllItems };
