import { FC } from 'react';
import { Languages, useLanguageContext } from '../../common/language/Language';

const Example2: FC = (): JSX.Element => {
	const { language } = useLanguageContext();

	return <h1>{language === Languages.English ? 'Example 2' : 'Beispiel 2'}</h1>;
};

export default Example2;
