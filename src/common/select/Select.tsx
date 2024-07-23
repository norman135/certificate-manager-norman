import { FC } from 'react';

type Option = {
	value: string;
	text: string;
};

interface SelectProps {
	options: Option[];
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: FC<SelectProps> = ({ options, onChange }): JSX.Element => {
	return (
		<select onChange={onChange}>
			{options.map((option) => (
				<option
					key={option.value}
					value={option.value}
				>
					{option.text}
				</option>
			))}
		</select>
	);
};

export default Select;
