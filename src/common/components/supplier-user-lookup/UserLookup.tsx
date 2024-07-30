import { ChangeEvent, FC, SetStateAction, useEffect, useState } from 'react';
import './Lookup.css';
import TextInput from '../input/TextInput';
import CancelIcon from '../icons/CancelIcon';
import Button from '../button/Button';
import SelectTable from '../select-table/SelectTable';
import User from '../../models/user.model';
import { initialUser } from '../../utils/user.utils';
import getAllUsers from '../../db/user-service';

interface UserLookupProps {
	closeSearch: () => void;
	selectUser: (user: User[]) => void;
}

const UserLookup: FC<UserLookupProps> = ({
	closeSearch,
	selectUser,
}): JSX.Element => {
	const [usersBuffer, setUsersBuffer] = useState<User[]>([]);
	const [usersArray, setUsersArray] = useState<User[]>([]);
	const [userInfo, setuserInfo] = useState<User>(initialUser);
	const [selectedUsers, setSelectedUsers] = useState<User[]>([]);

	useEffect(() => {
		getAllUsers().then((data) => {
			setUsersArray(data);
			setUsersBuffer(data);
		});
	}, []);

	const searchUsers = (): void => {
		const _users: User[] = [];

		for (let i = 0; i < usersArray.length; i++) {
			let user = usersArray[i] as User;
			if (
				user.name
					.toLowerCase()
					.includes((userInfo as User).name.toLowerCase(), 0) &&
				user.firstName
					.toLowerCase()
					.includes((userInfo as User).firstName.toLowerCase(), 0) &&
				user.userId
					.toLowerCase()
					.includes((userInfo as User).userId.toLowerCase(), 0) &&
				user.department
					.toLowerCase()
					.includes((userInfo as User).department.toLowerCase(), 0) &&
				user.plant
					.toLowerCase()
					.includes((userInfo as User).plant.toLowerCase(), 0)
			) {
				_users.push(user);
			}
		}

		setUsersBuffer(_users);
	};

	const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
		setuserInfo((prev) => ({
			...prev,
			name: e.target.value,
		}));
	};

	const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
		setuserInfo((prev) => ({
			...prev,
			firstName: e.target.value,
		}));
	};

	const handleDepartmentChange = (e: ChangeEvent<HTMLInputElement>) => {
		setuserInfo((prev) => ({
			...prev,
			department: e.target.value,
		}));
	};
	const handleUserIdChange = (e: ChangeEvent<HTMLInputElement>) => {
		setuserInfo((prev) => ({
			...prev,
			userId: e.target.value,
		}));
	};
	const handlePlantChange = (e: ChangeEvent<HTMLInputElement>) => {
		setuserInfo((prev) => ({
			...prev,
			plant: e.target.value,
		}));
	};

	const clearFields = () => {
		setuserInfo(initialUser);
	};

	return (
		<div className="search-container">
			<div className="search-top-bar">
				<p className="search-top-bar-title">Search for Persons</p>
				<button
					className="search-top-bar-close"
					onClick={closeSearch}
				>
					<CancelIcon
						width={10}
						height={10}
					/>
				</button>
			</div>
			<div className="search-main-content">
				<div className="search-criteria">
					<div className="expand-bar">Search criteria</div>
					<div className="search-criteria-input-area">
						<TextInput
							label="Name"
							value={userInfo.name}
							onchange={handleNameChange}
						/>
						<TextInput
							label="First Name"
							value={userInfo.firstName}
							onchange={handleFirstNameChange}
						/>
						<TextInput
							label="User ID"
							value={userInfo.userId}
							onchange={handleUserIdChange}
						/>
						<TextInput
							label="Department"
							value={userInfo.department}
							onchange={handleDepartmentChange}
						/>
						<TextInput
							label="Plant"
							value={userInfo.plant}
							onchange={handlePlantChange}
						/>
					</div>
					<Button
						name="Search"
						color="white"
						bg="#265b7a"
						type="button"
						onClick={searchUsers}
					/>
					<Button
						name="Reset"
						color="black"
						bg="#f6f6f6"
						type="button"
						onClick={clearFields}
					/>
				</div>
				<div className="search-list">
					<div className="expand-bar">Supplier list</div>
					<SelectTable<User>
						columns={['Name', 'First Name', 'User ID', 'Department', 'Plant']}
						items={usersBuffer}
						type={'multi'}
						onSelect={setSelectedUsers}
					/>
					<Button
						name="Save"
						color="white"
						bg="#f0cf93"
						type="button"
						onClick={() => {
							selectUser(selectedUsers);
							closeSearch();
						}}
						disabled={selectedUsers.length < 1}
					/>
					<Button
						name="Cancel"
						color="black"
						bg="#f6f6f6"
						type="button"
						onClick={closeSearch}
					/>
				</div>
			</div>
		</div>
	);
};

export default UserLookup;
