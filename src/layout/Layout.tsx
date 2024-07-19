import { FC } from 'react';
import SideBar from './side-bar/SideBar';
import './Layout.css';

interface LayoutProps {
	children: JSX.Element;
}
const Layout: FC<LayoutProps> = ({ children }): JSX.Element => {
	return (
		<div className="main-container">
			<SideBar />
			<main className="main-content">
				<div className="main-top-bar" />
				<div className="content-container">{children}</div>
			</main>
		</div>
	);
};

export default Layout;
