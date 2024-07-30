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

export const searchInUsers = async (criteria: {
	name: string;
	firstName: string;
	userId: string;
	department: string;
	plant: string;
}): Promise<User[]> => {
	const allUsers = await getAllUsers();

	return allUsers.filter(
		(user) =>
			user.name.toLowerCase().includes(criteria.name.toLowerCase(), 0) &&
			user.firstName
				.toLowerCase()
				.includes(criteria.firstName.toLowerCase(), 0) &&
			user.userId.toLowerCase().includes(criteria.userId.toLowerCase(), 0) &&
			user.department
				.toLowerCase()
				.includes(criteria.department.toLowerCase(), 0) &&
			user.plant.toLowerCase().includes(criteria.plant.toLowerCase(), 0),
	);
};

export default getAllUsers;
