import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './componens/SharedLayout/SharedLayout';
import { RestrictedRoute } from './componens/Routes/RestrictedRoutes';
import { PrivateRoute } from './componens/Routes/PrivateRoute';

const UserPage = lazy(() => import('../pages/User/UserPage'));

const MainPage = lazy(() => import('../pages/Main/MainPage'));


function App() {
  return (
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route index element={<RestrictedRoute redirectTo='/user' component={<MainPage />} />}></Route>
        <Route path='/user' element={<PrivateRoute redirectTo='/' component={<UserPage />} />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
