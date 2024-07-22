import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppRoutes from './common/app-routes/AppRoutes';
import Layout from './layout/Layout';
import Example1 from './pages/example-1/Example1';
import Example2 from './pages/example-2/Example2';
import Example3 from './pages/example-3/Example3';
import Start from './pages/start/Start';
import NewCertificate from './pages/example-1/new-certificate/NewCertificate';

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
						path="/new-certificate"
						element={<NewCertificate />}
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
