import { createContext, FC, useContext, useState } from 'react';
import * as dictionary from './lang.dict.json';

export type Language = {
	language: string;
	setLanguage: (lang: string) => void;
};

export enum Languages {
	English = 'en',
	German = 'de',
}

export const toSelectedLocale = (key: string, language: string): string => {
	if (language === Languages.English) {
		return dictionary[key as keyof typeof dictionary][0];
	}
	return dictionary[key as keyof typeof dictionary][1];
};

export const LanguageContext = createContext<Language>({
	language: Languages.English,
	setLanguage: () => {},
});

export const useLanguageContext = (): Language => {
	return useContext(LanguageContext);
};

interface LanguageContextProviderProps {
	children: JSX.Element;
}

const LanguageContextProvider: FC<LanguageContextProviderProps> = ({
	children,
}): JSX.Element => {
	const [language, setLanguage] = useState<string>(Languages.English);

	return (
		<LanguageContext.Provider
			value={{
				language,
				setLanguage(lang: string) {
					setLanguage(lang);
				},
			}}
		>
			{children}
		</LanguageContext.Provider>
	);
};

export default LanguageContextProvider;
