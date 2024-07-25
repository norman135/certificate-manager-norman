import { FC } from 'react';
import { CertificateType } from '../models/certificate.model';

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
