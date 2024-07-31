import { ChangeEvent, FC } from 'react';

interface RadioProps {
	key: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Radio: FC<RadioProps> = ({ key, onChange }) => {
	return (
		<input
			key={key}
			type="radio"
			name="select-table"
			onChange={onChange}
		/>
	);
};

export default Radio;
