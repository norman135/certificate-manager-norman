import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppRoutes from './common/app-routes/AppRoutes';
import Layout from './layout/Layout';
import NewCertificate from './pages/example-1/new-certificate/NewCertificate';
import Example1 from './pages/example-1/Example1';
import EditCertificate from './pages/example-1/edit-certificate/EditCertificate';
import Example2 from './pages/example-2/Example2';
import Example3 from './pages/example-3/Example3';
import Start from './pages/start/Start';

const App: FC = (): JSX.Element => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route
						path={AppRoutes.Root}
						element={<Start />}
					/>
					<Route
						path={AppRoutes.Example1}
						element={<Example1 />}
					/>
					<Route
						path={AppRoutes.NewCertificate}
						element={<NewCertificate />}
					/>
					<Route
						path={AppRoutes.EditCertificateParam}
						element={<EditCertificate />}
					/>
					<Route
						path={AppRoutes.Example2}
						element={<Example2 />}
					/>
					<Route
						path={AppRoutes.Example3}
						element={<Example3 />}
					/>
				</Routes>
			</Layout>
		</BrowserRouter>
	);
};

export default App;
