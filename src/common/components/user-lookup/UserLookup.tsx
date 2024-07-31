import { ChangeEvent, FC, useState } from 'react';
import './Lookup.css';
import TextInput from '../input/TextInput';
import CancelIcon from '../icons/CancelIcon';
import Button from '../button/Button';
import User from '../../models/user.model';
import { initialUser } from '../../utils/user.utils';
import { searchInUsers } from '../../db/user-service';
import Table from '../table/Table';
import { toSelectedLocale, useLanguageContext } from '../../language/Language';

interface UserLookupProps {
	closeSearch: () => void;
	selectUsers: (user: User[]) => void;
}

const UserLookup: FC<UserLookupProps> = ({
	closeSearch,
	selectUsers,
}): JSX.Element => {
	const [usersBuffer, setUsersBuffer] = useState<User[]>([]);
	const [userInfo, setuserInfo] = useState<User>(initialUser);
	const [selectedUsers, setSelectedUsers] = useState<User[]>([]);

	const { language } = useLanguageContext();

	const searchUsers = async () => {
		const users = await searchInUsers(userInfo);
		setUsersBuffer(users);
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

	const handleSelect = (selected: number | number[]) => {
		setSelectedUsers(
			usersBuffer.filter((user, index) =>
				(selected as number[]).includes(index) ? user : null,
			),
		);
	};

	const handleSave = () => {
		selectUsers(selectedUsers);
		closeSearch();
	};

	return (
		<div className="search-container">
			<div className="search-top-bar">
				<p className="search-top-bar-title">
					{toSelectedLocale('searchPersons', language)}
				</p>
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
					<div className="expand-bar">
						{toSelectedLocale('searchCriteria', language)}
					</div>
					<div className="search-criteria-input-area">
						<TextInput
							label="Name"
							value={userInfo.name}
							onchange={handleNameChange}
						/>
						<TextInput
							label={toSelectedLocale('firstName', language)}
							value={userInfo.firstName}
							onchange={handleFirstNameChange}
						/>
						<TextInput
							label={toSelectedLocale('userId', language)}
							value={userInfo.userId}
							onchange={handleUserIdChange}
						/>
						<TextInput
							label={toSelectedLocale('department', language)}
							value={userInfo.department}
							onchange={handleDepartmentChange}
						/>
						<TextInput
							label={toSelectedLocale('plant', language)}
							value={userInfo.plant}
							onchange={handlePlantChange}
						/>
					</div>
					<Button
						name={toSelectedLocale('search', language)}
						color="white"
						bg="#265b7a"
						type="button"
						onClick={searchUsers}
					/>
					<Button
						name={toSelectedLocale('reset', language)}
						color="black"
						bg="#f6f6f6"
						type="button"
						onClick={clearFields}
					/>
				</div>
				<div className="search-list">
					<div className="expand-bar">
						{toSelectedLocale('userList', language)}
					</div>
					<Table
						columns={[
							'Name',
							toSelectedLocale('firstName', language),
							toSelectedLocale('userId', language),
							toSelectedLocale('department', language),
							toSelectedLocale('plant', language),
						]}
						data={usersBuffer.map((user) => ({
							name: user.name,
							firstName: user.firstName,
							userId: user.userId,
							department: user.department,
							plant: user.plant,
						}))}
						selectable={true}
						type="multi"
						onSelect={handleSelect}
					/>
					<Button
						name={toSelectedLocale('save', language)}
						color="white"
						bg="#f0cf93"
						type="button"
						onClick={handleSave}
						disabled={selectedUsers.length < 1}
					/>
					<Button
						name={toSelectedLocale('cancel', language)}
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
