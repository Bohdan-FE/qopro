import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { userSelector } from 'src/redux/selectors';


type Props = {
    component: React.ReactElement
    redirectTo: string
}

export const PrivateRoute = ({
    component: Component,
    redirectTo = '/',
}: Props) => {
    const { address } = useSelector(userSelector);

    return !address ? <Navigate to={redirectTo} /> : Component;
};