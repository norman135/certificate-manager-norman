import { FC } from 'react';

type Option = {
	value: string;
	text: string;
};

interface SelectProps {
	options: Option[];
	value: string;
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: FC<SelectProps> = ({ options, value, onChange }): JSX.Element => {
	return (
		<select
			onChange={onChange}
			value={value}
		>
			{options.map((option, index) => (
				<option
					key={index.toString()}
					value={option.value}
				>
					{option.text}
				</option>
			))}
		</select>
	);
};

export default Select;
