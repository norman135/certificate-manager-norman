import { FC } from 'react';
import './DropDown.css';

export type DropDownItem = {
	name: string;
	action: () => void;
};

interface DropDownProps {
	items: DropDownItem[];
}

const handleClick = (item: DropDownItem): void => {
	item.action();
};

const DropDown: FC<DropDownProps> = ({ items }): JSX.Element => {
	return (
		<div className="dropdown">
			{items.map((item) => (
				<div
					className="dropdown-item"
					onClick={() => handleClick(item)}
					onKeyDown={() => handleClick(item)}
					key={item.name}
				>
					{item.name}
				</div>
			))}
		</div>
	);
};

export default DropDown;
