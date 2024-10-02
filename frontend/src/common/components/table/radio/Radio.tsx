import { ChangeEvent, FC } from 'react';

interface RadioProps {
	identifier: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Radio: FC<RadioProps> = ({ identifier, onChange }) => {
	return (
		<input
			key={identifier}
			type="radio"
			name="select-table"
			onChange={onChange}
		/>
	);
};

export default Radio;
