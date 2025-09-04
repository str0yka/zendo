import { Outlet, RouterProvider as ReactRouterProvider, createBrowserRouter } from 'react-router';

import { NotFoundPage } from '@pages/not-found';
import { PackPage } from '@pages/pack';
import { PacksPage } from '@pages/packs';
import { PacksCreatePage } from '@pages/packs-create';

import { Layout } from '@widgets/layout';

import { ROUTE } from '@shared/config';

const router = createBrowserRouter([
  {
    path: ROUTE.PACKS,
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        index: true,
        element: <PacksPage />
      },
      {
        path: ROUTE.PACK_CREATE,
        element: <PacksCreatePage />
      },
      {
        path: ROUTE.PACK(':id'),
        element: <PackPage />
      }
    ],
    errorElement: (
      <Layout>
        <NotFoundPage />
      </Layout>
    )
  }
]);

export const RouterProvider = () => <ReactRouterProvider router={router} />;
