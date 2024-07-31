import { ChangeEvent, FC } from 'react';

interface RadioProps {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	key: string;
}

const Radio: FC<RadioProps> = ({ onChange, key }) => {
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
