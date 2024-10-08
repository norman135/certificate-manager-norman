import { Link } from 'react-router-dom';
import '../SideBar.css';

type SubMenuItem = {
	text: string;
	to: string;
};

interface SideNavItemProps {
	svgIconPath: string;
	svgVB: string;
	itemName: string;
	to: string;
	subMenu: SubMenuItem[];
	selected: boolean;
	index: number;
	onclick: (index: number) => void;
}

const handleSubmenuClick = (
	e:
		| React.MouseEvent<HTMLDivElement, MouseEvent>
		| React.KeyboardEvent<HTMLDivElement>,
): void => {
	e.stopPropagation();
};

const SideNavItem: React.FC<SideNavItemProps> = ({
	svgIconPath,
	svgVB,
	itemName,
	to,
	subMenu,
	selected,
	index,
	onclick,
}): JSX.Element => {
	return (
		<div
			className="side-nav-item"
			onClick={() => onclick(index)}
			onKeyDown={() => onclick(index)}
		>
			<Link to={to}>
				<div
					className={
						selected ? 'side-nav-item-desc sni-selected' : 'side-nav-item-desc'
					}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox={svgVB}
					>
						<path d={svgIconPath} />
					</svg>
					<p className="side-nav-item-text">{itemName}</p>
					{subMenu.length !== 0 ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 448 512"
							className={
								selected ? 'expand-icon expand-icon-selected' : 'expand-icon'
							}
						>
							<path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
						</svg>
					) : null}
				</div>
			</Link>
			{subMenu.length !== 0 && selected ? (
				<div className="sub-menu">
					{subMenu.map((SubMenuItem) => (
						<div
							key={SubMenuItem.text}
							className="sub-menu-item"
							onClick={handleSubmenuClick}
							onKeyDown={handleSubmenuClick}
						>
							<Link to={SubMenuItem.to}>{SubMenuItem.text}</Link>
						</div>
					))}
				</div>
			) : null}
		</div>
	);
};

export default SideNavItem;
