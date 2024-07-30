import { createContext, useContext } from 'react';
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
	} else {
		return dictionary[key as keyof typeof dictionary][1];
	}
};

export const LanguageContext = createContext<Language>({
	language: Languages.English,
	setLanguage: () => {},
});

export const useLanguageContext = () => {
	return useContext(LanguageContext);
};
