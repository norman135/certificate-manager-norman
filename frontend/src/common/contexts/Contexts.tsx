import { FC } from 'react';
import LanguageContextProvider from './language/Language';
import CurrentUserContextProvider from './user/User';

interface ContextsProps {
	children: JSX.Element;
}

const Contexts: FC<ContextsProps> = ({ children }) => {
	return (
		<LanguageContextProvider>
			<CurrentUserContextProvider>{children}</CurrentUserContextProvider>
		</LanguageContextProvider>
	);
};

export default Contexts;
