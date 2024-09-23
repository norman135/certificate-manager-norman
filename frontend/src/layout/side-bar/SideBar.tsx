import SideNav from './side-nav/SideNav';
import MainTitle from '../title/MainTitle';
import './SideBar.css';

const SideBar: React.FC = () => {
	return (
		<div className="side-bar">
			<MainTitle />
			<SideNav />
		</div>
	);
};

export default SideBar;
