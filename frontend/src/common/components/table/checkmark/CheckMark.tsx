import { ChangeEvent, FC } from 'react';

interface CheckMarkProps {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	checked: boolean;
	key: string;
}

const CheckMark: FC<CheckMarkProps> = ({ onChange, checked, key }) => {
	return (
		<input
			key={key}
			type="checkbox"
			name="select-table"
			onChange={onChange}
			checked={checked}
		/>
	);
};

export default CheckMark;
