import { Suspense, lazy } from 'react';
import type { RouteObject } from 'react-router-dom';
import FullScreenLoader from '../components/FullScreenLoader';
import Layout from '../components/layout';
import RequireUser from '../components/requireUser';
import HomePage from '../pages/Home';
import LoginPage from '../pages/login.page';
import ProfilePage from '../pages/profile.page';
import ScrutinMajoritaire from '../pages/ScrutinMajoritaire';
import ScrutinClass from '../pages/ScrutinClass';
import ScrutinW from '../pages/ScrutinW';
import ScrutinNote from '../pages/ScrutinNote';
import ScrutinChoice from '../pages/ScrutinChoice';

const Loadable =
  (Component: React.ComponentType<any>) => (props: JSX.IntrinsicAttributes) =>
    (
      <Suspense fallback={<FullScreenLoader />}>
        <Component {...props} />
      </Suspense>
    );

const RegisterPage = Loadable(lazy(() => import('../pages/register.page')));
const UnauthorizePage = Loadable(
  lazy(() => import('../pages/unauthorize.page'))
);

const authRoutes: RouteObject = {
  path: '*',
  children: [
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'register',
      element: <RegisterPage />,
    },
    {
      index: true,
      element: <HomePage />,
    },
  ],
};

const normalRoutes: RouteObject = {
  path: '*',
  element: <Layout />,
  children: [
    {
      element: <RequireUser allowedRoles={['user', 'admin']} />,
      children: [
        {
          path: 'profile',
          element: <ProfilePage />,
        },
        {
          path: 'scrutinMaj',
          element: <ScrutinMajoritaire/>
        },
        {
          path: 'scrutinClass',
          element: <ScrutinClass/>
        },
        {
          path: 'scrutinW',
          element: <ScrutinW/>
        },
        {
          path: 'scrutinNote',
          element: <ScrutinNote/>
        },
        {
          path: 'scrutinChoice',
          element: <ScrutinChoice/>
        },
      ],
    },
    {
      path: 'unauthorized',
      element: <UnauthorizePage />,
    },
  ],
};

const routes: RouteObject[] = [authRoutes, normalRoutes];

export default routes;
