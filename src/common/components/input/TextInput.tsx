import { FC } from 'react';
import './TextInput.css';
import '../../../pages/example-1/certificate-details/CertificateDetails.css';

interface TextInputProps {
	label: string;
	value: string;
	onchange: React.ChangeEventHandler<HTMLInputElement>;
}

const TextInput: FC<TextInputProps> = ({
	label,
	value,
	onchange,
}): JSX.Element => {
	return (
		<div className="text-input">
			<label>{label}</label>
			<div className="text-input-container">
				<input
					type="text"
					value={value}
					onChange={onchange}
				/>
			</div>
		</div>
	);
};

export default TextInput;
