import { FC } from 'react';

interface CancelIconProps {
	width: number;
	height: number;
}

const CancelIcon: FC<CancelIconProps> = ({ width, height }): JSX.Element => {
	return (
		<svg
			enableBackground="new 0 0 512 512"
			viewBox="0 0 512 512"
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
		>
			<path
				d="m325.297 256 134.148-134.148c19.136-19.136 19.136-50.161 0-69.297-19.137-19.136-50.16-19.136-69.297 0l-134.148 134.148-134.148-134.148c-19.136-19.136-50.161-19.136-69.297 0s-19.136 50.161 0 69.297l134.148 134.148-134.148 134.148c-19.136 19.136-19.136 50.161 0 69.297 9.568 9.567 22.108 14.352 34.648 14.352s25.081-4.784 34.648-14.352l134.149-134.148 134.148 134.148c9.568 9.567 22.108 14.352 34.648 14.352s25.08-4.784 34.648-14.352c19.136-19.136 19.136-50.161 0-69.297z"
				fill="#2b3b47"
			/>
		</svg>
	);
};

export default CancelIcon;
