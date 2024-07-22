import { FC } from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

interface ButtonProps {
	name: string;
	color: string;
	bg: string;
	to: string;
}

const Button: FC<ButtonProps> = ({ name, color, bg, to }) => {
	return (
		<Link
			to={to}
			className="button"
			style={{
				backgroundColor: bg,
				color: color,
			}}
		>
			{name}
		</Link>
	);
};

export default Button;
