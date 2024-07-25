import { useState } from 'react';
import SideNavItem from './SideNavItem';
import '../SideBar.css';
import AppRoutes from '../../../common/app-routes/AppRoutes';

const SideNav: React.FC = (): JSX.Element => {
	const [selectedItem, setSelectedItem] = useState(0);

	const handleClick = (index: number): void => {
		setSelectedItem(index);
	};

	return (
		<div className="side-nav">
			<SideNavItem
				svgIconPath="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
				svgVB="0 0 576 512"
				itemName="Start"
				to={AppRoutes.Root}
				subMenu={[]}
				selected={selectedItem === 0}
				index={0}
				onclick={() => handleClick(0)}
			/>
			<SideNavItem
				svgIconPath="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
				svgVB="0 0 448 512"
				itemName="Machine Learning"
				to="#"
				subMenu={[
					{
						text: 'Example 1',
						to: AppRoutes.Example1,
					},
					{
						text: 'Example 2',
						to: AppRoutes.Example2,
					},
					{
						text: 'Example 3',
						to: AppRoutes.Example3,
					},
				]}
				selected={selectedItem === 1}
				index={1}
				onclick={() => handleClick(1)}
			/>
		</div>
	);
};

export default SideNav;
