import { ChangeEvent, FC, useEffect, useState } from 'react';
import SideBar from './side-bar/SideBar';
import './Layout.css';
import Select from '../common/components/select/Select';
import { UserDTO } from '../common/contexts/api-client';
import { useApiClientContext } from '../common/contexts/api-client/ApiClient';
import {
	Languages,
	toSelectedLocale,
	useLanguageContext,
} from '../common/contexts/language/Language';
import { useCurrentUserContext } from '../common/contexts/user/User';
import getAllUsers from '../common/services/user-service';
import { initialUser } from '../common/utils/user.utils';

interface LayoutProps {
	children: JSX.Element;
}
const Layout: FC<LayoutProps> = ({ children }): JSX.Element => {
	const [users, setUsers] = useState<UserDTO[]>([initialUser]);
	const { language, setLanguage } = useLanguageContext();
	const { user, setUser } = useCurrentUserContext();
	const { basicDataClient } = useApiClientContext();

	const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setLanguage(e.target.value);
	};

	useEffect(() => {
		const getUsers = async () => {
			const allUsers = await getAllUsers(basicDataClient);

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
				value: user.handle ?? '',
				text: user.name ?? '',
			});
		});

		return options;
	};

	const handleUserChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const { value } = e.target;

		const _user = value
			? users.filter((user) => user.handle === e.target.value)[0]
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
								value={user.handle ?? ''}
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
