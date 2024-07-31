import { FC } from 'react';
import {
	toSelectedLocale,
	useLanguageContext,
} from '../../common/contexts/language/Language';

const Start: FC = (): JSX.Element => {
	const { language } = useLanguageContext();
	return <h1>{toSelectedLocale('start', language)}</h1>;
};

export default Start;
