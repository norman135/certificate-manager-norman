import { ChangeEvent, FC } from 'react';

interface RadioProps {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Radio: FC<RadioProps> = ({ onChange }) => {
	return (
		<input
			type="radio"
			name="select-table"
			onChange={onChange}
		/>
	);
};

export default Radio;
