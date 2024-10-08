import { createContext, FC, useContext } from 'react';
import { BasicDataApi, CertificateApi } from '../../api/apis';

export type ApiClient = {
	basicDataClient: BasicDataApi;
	certificateClient: CertificateApi;
};

export const ApiClientContext = createContext<ApiClient>({
	basicDataClient: new BasicDataApi(),
	certificateClient: new CertificateApi(),
});

export const useApiClientContext = (): ApiClient => {
	return useContext(ApiClientContext);
};

interface ApiClientContextProviderProps {
	children: JSX.Element;
}

const ApiClientContextProvider: FC<ApiClientContextProviderProps> = ({
	children,
}): JSX.Element => {
	return (
		<ApiClientContext.Provider
			value={{
				basicDataClient: new BasicDataApi(),
				certificateClient: new CertificateApi(),
			}}
		>
			{children}
		</ApiClientContext.Provider>
	);
};

export default ApiClientContextProvider;
