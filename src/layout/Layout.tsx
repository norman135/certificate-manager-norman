import { ChangeEvent, FC, useEffect, useState } from 'react';
import SideBar from './side-bar/SideBar';
import './Layout.css';
import Select from '../common/components/select/Select';
import {
	Languages,
	toSelectedLocale,
	useLanguageContext,
} from '../common/language/Language';
import { initialUser } from '../common/utils/user.utils';
import User from '../common/models/user.model';
import getAllUsers from '../common/db/user-service';
import { useCurrentUserContext } from '../common/user/User';

interface LayoutProps {
	children: JSX.Element;
}
const Layout: FC<LayoutProps> = ({ children }): JSX.Element => {
	const [users, setUsers] = useState<User[]>([initialUser]);
	const { language, setLanguage } = useLanguageContext();
	const { user, setUser } = useCurrentUserContext();

	const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setLanguage(e.target.value);
	};

	useEffect(() => {
		const getUsers = async () => {
			const allUsers = await getAllUsers();

			setUsers(allUsers);
		};

		getUsers();
	}, []);

	const getUserOptions = () => {
		const options = [
			{
				value: '',
				text: toSelectedLocale('chooseUser', language),
			},
		];

		users.forEach((user) => {
			options.push({
				value: user.id,
				text: user.name,
			});
		});

		return options;
	};

	const handleUserChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const value = e.target.value;

		const _user = value
			? users.filter((user) => user.id === e.target.value)[0]
			: initialUser;

		setUser(_user);
	};

	return (
		<div className="main-container">
			<SideBar />
			<main className="main-content">
				<div className="main-top-bar">
					<div className="main-top-bar-options">
						<div className="main-top-bar-option">
							<div className="main-top-bar-option-label">
								{toSelectedLocale('user', language)}
							</div>
							<Select
								options={getUserOptions()}
								value={user.id}
								onChange={handleUserChange}
							/>
						</div>
						<div className="main-top-bar-option">
							<div className="main-top-bar-option-label">
								{toSelectedLocale('language', language)}
							</div>
							<Select
								options={[
									{
										value: Languages.English,
										text: 'English',
									},
									{
										value: Languages.German,
										text: 'Deutsche',
									},
								]}
								value={language}
								onChange={handleLanguageChange}
							/>
						</div>
					</div>
				</div>
				<div className="content-container">{children}</div>
			</main>
		</div>
	);
};

export default Layout;
