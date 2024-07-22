import { FC } from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

interface ButtonProps {
	name: string;
	color: string;
	bg: string;
	type: 'link' | 'button';
	to: string;
	onClick: () => void;
}

const Button: FC<ButtonProps> = ({
	name,
	color,
	bg,
	type,
	to = '',
	onClick = (): void => {},
}) => {
	return (
		<>
			{type === 'link' ? (
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
			) : (
				<button
					className="button"
					style={{
						backgroundColor: bg,
						color: color,
					}}
					onClick={onClick}
				>
					{name}
				</button>
			)}
		</>
	);
};

export default Button;
