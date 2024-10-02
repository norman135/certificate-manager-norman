import { ChangeEvent, FC } from 'react';

interface CheckMarkProps {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	checked: boolean;
	_key: string;
}

const CheckMark: FC<CheckMarkProps> = ({ onChange, checked, _key }) => {
	return (
		<input
			key={_key}
			type="checkbox"
			name="select-table"
			onChange={onChange}
			checked={checked}
		/>
	);
};

export default CheckMark;
