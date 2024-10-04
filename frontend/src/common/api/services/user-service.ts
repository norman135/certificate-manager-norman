import User from '../../models/user.model';
import { certificatesClient } from './certificate-service';

const getAllUsers = async (): Promise<User[]> => {
	try {
		const usersData: User[] =
			(await certificatesClient.users(
				undefined,
				undefined,
				undefined,
				undefined,
				undefined,
			)) ?? [];

		return usersData;
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
	try {
		const usersData: User[] =
			(await certificatesClient.users(
				criteria.name,
				criteria.firstName,
				criteria.userId,
				criteria.department,
				criteria.plant,
			)) ?? [];

		return usersData;
	} catch (error) {
		console.error('Error searching users:', error);
		return [];
	}
};

export default getAllUsers;
