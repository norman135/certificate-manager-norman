import { UserDTO } from '../../models/dtos/user-dto';
import User from '../../models/user.model';
import { UserMapper } from '../../utils/mappers/user-mapper';
import { getAllItems } from '../api';

const getAllUsers = async (): Promise<User[]> => {
	try {
		const usersData: UserDTO[] = await getAllItems('users');

		if (usersData) {
			let users: User[] = usersData.map((user) => UserMapper.ToModel(user));

			return users;
		} else {
			return [];
		}
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
		const usersData: UserDTO[] = await getAllItems(
			`users?name=${criteria.name}&firstName=${criteria.firstName}&userId=${criteria.userId}&department=${criteria.department}&plant=${criteria.plant}`,
		);

		let users: User[] = usersData.map((user) => UserMapper.ToModel(user));

		if (users) {
			return users;
		} else {
			return [];
		}
	} catch (error) {
		console.error('Error getting all users:', error);
		return [];
	}
};

export default getAllUsers;
