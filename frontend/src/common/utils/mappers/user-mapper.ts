import { UserDTO } from '../../models/dtos/user-dto';
import User from '../../models/user.model';

export class UserMapper {
	static ToModel(userDTO: UserDTO): User {
		let user: User = {
			id: userDTO.handle,
			name: userDTO.name,
			firstName: userDTO.firstName,
			email: userDTO.email,
			userId: userDTO.userId,
			department: userDTO.department,
			plant: userDTO.plant,
		};

		return user;
	}

	static ToDTO(user: User): UserDTO {
		let userDTO: UserDTO = {
			handle: user.id,
			name: user.name,
			firstName: user.firstName,
			email: user.email,
			userId: user.userId,
			department: user.department,
			plant: user.plant,
		};

		return userDTO;
	}
}
