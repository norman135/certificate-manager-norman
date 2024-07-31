import { FC } from 'react';

interface DatePickerProps {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	min: string;
}
const DatePicker: FC<DatePickerProps> = ({
	value,
	onChange,
	min = '1970-01-01',
}): JSX.Element => {
	return (
		<input
			type="date"
			placeholder="Click to Select Date"
			value={value}
			onChange={onChange}
			min={min}
		/>
	);
};

export default DatePicker;
