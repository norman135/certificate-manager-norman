import { createContext, useContext } from 'react';
import { initialUser } from '../utils/user.utils';
import User from '../models/user.model';

export type CurrentUser = {
	user: User;
	setUser: (user: User) => void;
};

export const CurrentUserContext = createContext<CurrentUser>({
	user: initialUser,
	setUser: () => {},
});

export const useCurrentUserContext = () => {
	return useContext(CurrentUserContext);
};
