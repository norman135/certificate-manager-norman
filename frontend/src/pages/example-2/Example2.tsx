import { FC } from 'react';
import {
	toSelectedLocale,
	useLanguageContext,
} from '../../common/contexts/language/Language';

const Example2: FC = (): JSX.Element => {
	const { language } = useLanguageContext();

	return <h1>{`${toSelectedLocale('example', language)} 2`}</h1>;
};

export default Example2;
