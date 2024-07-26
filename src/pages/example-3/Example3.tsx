import { FC } from 'react';
import { Languages, useLanguageContext } from '../../common/language/Language';

const Example3: FC = (): JSX.Element => {
	const { language } = useLanguageContext();

	return <h1>{language === Languages.English ? 'Example 3' : 'Beispiel 3'}</h1>;
};

export default Example3;
