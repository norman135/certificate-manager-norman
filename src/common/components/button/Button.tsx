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
	disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
	name,
	color,
	bg,
	type,
	to = '',
	onClick = (): void => {},
	disabled = false,
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
					style={
						disabled
							? {
									backgroundColor: bg,
									color: color,
									cursor: 'not-allowed',
									opacity: 0.5,
								}
							: {
									backgroundColor: bg,
									color: color,
								}
					}
					onClick={onClick}
					disabled={disabled}
				>
					{name}
				</button>
			)}
		</>
	);
};

export default Button;
