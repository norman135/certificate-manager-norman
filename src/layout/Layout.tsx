import { FC } from 'react';
import SideBar from './side-bar/SideBar';
import './Layout.css';
import Select from '../common/select/Select';
import {
	Languages,
	toSelectedLocale,
	useLanguageContext,
} from '../common/language/Language';

interface LayoutProps {
	children: JSX.Element;
}
const Layout: FC<LayoutProps> = ({ children }): JSX.Element => {
	const { language, setLanguage } = useLanguageContext();

	return (
		<div className="main-container">
			<SideBar />
			<main className="main-content">
				<div className="main-top-bar">
					<div className="main-top-bar-options">
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
								onChange={(e) => {
									setLanguage(e.target.value);
								}}
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
