import { createContext, FC, useContext, useState } from 'react';
import { initialUser } from '../../utils/user.utils';
import User from '../../models/user.model';

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

interface CurrentUserContextProviderProps {
	children: JSX.Element;
}

const CurrentUserContextProvider: FC<CurrentUserContextProviderProps> = ({
	children,
}): JSX.Element => {
	const [currentUser, setCurrentUser] = useState<User>(initialUser);

	return (
		<CurrentUserContext.Provider
			value={{
				user: currentUser,
				setUser: (user: User) => setCurrentUser(user),
			}}
		>
			{children}
		</CurrentUserContext.Provider>
	);
};

export default CurrentUserContextProvider;
