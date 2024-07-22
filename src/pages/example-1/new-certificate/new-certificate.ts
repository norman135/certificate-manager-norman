import { NavigateFunction, useNavigate } from 'react-router-dom';
import AppRoutes from '../../../common/app-routes/AppRoutes';

const navigate: NavigateFunction = useNavigate;

export const goBack = (): void => {
	navigate(AppRoutes.Example1);
};
