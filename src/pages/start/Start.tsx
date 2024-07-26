import { FC } from 'react';
import { Languages, useLanguageContext } from '../../common/language/Language';

const Start: FC = (): JSX.Element => {
	const { language } = useLanguageContext();
	return <h1>{language === Languages.English ? 'Start' : 'Beginnen'}</h1>;
};

export default Start;
