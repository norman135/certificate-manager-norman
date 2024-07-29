import { FC } from 'react';
import {
	Languages,
	toSelectedLocale,
	useLanguageContext,
} from '../../common/language/Language';

const Example2: FC = (): JSX.Element => {
	const { language } = useLanguageContext();

	return <h1>{`${toSelectedLocale('example', language)} 2`}</h1>;
};

export default Example2;
