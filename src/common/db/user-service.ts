import User from '../models/user.model';
import { getAllItems } from './db';

const getAllUsers = async (): Promise<User[]> => {
	try {
		const request = await getAllItems('users');
		return new Promise<User[]>((resolve, reject) => {
			request.onsuccess = () => {
				resolve(request.result as User[]);
			};
			request.onerror = () => {
				reject(request.error);
			};
		});
	} catch (error) {
		console.error('Error getting all users:', error);
		return [];
	}
};

export default getAllUsers;
