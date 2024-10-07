import { BasicDataApi, UsersGetRequest } from '../contexts/api-client/apis';
import { UserDTO } from '../contexts/api-client/models';

const getAllUsers = async (
	basicDataClient: BasicDataApi,
): Promise<UserDTO[]> => {
	try {
		const usersData: UserDTO[] = await basicDataClient.usersGet();

		return usersData;
	} catch (error) {
		console.error('Error getting all users:', error);
		return [];
	}
};

export const searchInUsers = async (
	basicDataClient: BasicDataApi,
	criteria: {
		name: string;
		firstName: string;
		userId: string;
		department: string;
		plant: string;
	},
): Promise<UserDTO[]> => {
	try {
		const usersData: UserDTO[] = await basicDataClient.usersGet(
			criteria as UsersGetRequest,
		);

		return usersData;
	} catch (error) {
		console.error('Error getting all users:', error);
		return [];
	}
};

export default getAllUsers;
