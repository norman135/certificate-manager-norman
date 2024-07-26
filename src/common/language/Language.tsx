import { createContext, useContext } from 'react';

export type Language = {
	language: string;
	setLanguage: (lang: string) => void;
};

export enum Languages {
	English = 'en',
	German = 'de',
}

export const LanguageContext = createContext<Language>({
	language: Languages.English,
	setLanguage: () => {},
});

export const useLanguageContext = () => {
	return useContext(LanguageContext);
};
