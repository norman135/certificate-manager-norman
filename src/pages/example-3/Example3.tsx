import { FC } from 'react';
import {
	toSelectedLocale,
	useLanguageContext,
} from '../../common/language/Language';

const Example3: FC = (): JSX.Element => {
	const { language } = useLanguageContext();

	return <h1>{`${toSelectedLocale('example', language)} 3`}</h1>;
};

export default Example3;
