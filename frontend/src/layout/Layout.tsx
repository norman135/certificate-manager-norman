import { ChangeEvent, FC, useEffect, useState } from 'react';
import SideBar from './side-bar/SideBar';
import './Layout.css';
import { UserDTO } from '../common/api';
import Select from '../common/components/select/Select';
import { useApiClientContext } from '../common/contexts/api-client/ApiClient';
import {
	Languages,
	toSelectedLocale,
	useLanguageContext,
} from '../common/contexts/language/Language';
import { useCurrentUserContext } from '../common/contexts/user/User';
import { initialUser } from '../common/utils/user.utils';

interface LayoutProps {
	children: JSX.Element;
}
const Layout: FC<LayoutProps> = ({ children }): JSX.Element => {
	const [users, setUsers] = useState<UserDTO[]>([initialUser]);
	const { language, setLanguage } = useLanguageContext();
	const { user, setUser } = useCurrentUserContext();
	const { basicDataClient } = useApiClientContext();

	const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>): void => {
		setLanguage(e.target.value);
	};

	useEffect(() => {
		const getUsers = async (): Promise<void> => {
			const allUsers = await basicDataClient.usersGet();

			setUsers(allUsers);
		};

		getUsers();
	}, []);

	const getUserOptions = (): {
		value: string;
		text: string;
	}[] => {
		const options = [
			{
				value: '',
				text: toSelectedLocale('chooseUser', language),
			},
		];

		users.forEach((_user) => {
			options.push({
				value: _user.handle ?? '',
				text: _user.name ?? '',
			});
		});

		return options;
	};

	const handleUserChange = (e: ChangeEvent<HTMLSelectElement>): void => {
		const { value } = e.target;

		const _user = value
			? users.filter((__user) => __user.handle === e.target.value)[0]
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
