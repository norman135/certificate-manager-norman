import { FC } from 'react';
import ApiClientContextProvider from './api-client/ApiClient';
import LanguageContextProvider from './language/Language';
import CurrentUserContextProvider from './user/User';

interface ContextsProps {
	children: JSX.Element;
}

const Contexts: FC<ContextsProps> = ({ children }) => {
	return (
		<LanguageContextProvider>
			<CurrentUserContextProvider>
				<ApiClientContextProvider>{children}</ApiClientContextProvider>
			</CurrentUserContextProvider>
		</LanguageContextProvider>
	);
};

export default Contexts;
