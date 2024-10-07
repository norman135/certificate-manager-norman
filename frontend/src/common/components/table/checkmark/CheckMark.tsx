import { ChangeEvent, FC } from 'react';

interface CheckMarkProps {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	checked: boolean;
}

const CheckMark: FC<CheckMarkProps> = ({ onChange, checked }) => {
	return (
		<input
			type="checkbox"
			name="select-table"
			onChange={onChange}
			checked={checked}
		/>
	);
};

export default CheckMark;
