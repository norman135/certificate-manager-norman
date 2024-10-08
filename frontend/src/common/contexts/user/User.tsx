import { createContext, FC, useContext, useState } from 'react';
import { UserDTO } from '../../api';
import { initialUser } from '../../utils/user.utils';

export type CurrentUser = {
	user: UserDTO;
	setUser: (user: UserDTO) => void;
};

export const CurrentUserContext = createContext<CurrentUser>({
	user: initialUser,
	setUser: () => {},
});

export const useCurrentUserContext = (): CurrentUser => {
	return useContext(CurrentUserContext);
};

interface CurrentUserContextProviderProps {
	children: JSX.Element;
}

const CurrentUserContextProvider: FC<CurrentUserContextProviderProps> = ({
	children,
}): JSX.Element => {
	const [currentUser, setCurrentUser] = useState<UserDTO>(initialUser);

	return (
		<CurrentUserContext.Provider
			value={{
				user: currentUser,
				setUser: (user: UserDTO) => setCurrentUser(user),
			}}
		>
			{children}
		</CurrentUserContext.Provider>
	);
};

export default CurrentUserContextProvider;
