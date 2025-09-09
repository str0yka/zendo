import { Outlet, RouterProvider as ReactRouterProvider, createBrowserRouter } from 'react-router';

import { NotFoundPage } from '@pages/not-found';
import { PackPage, packPageLoader } from '@pages/pack';
import { PackGuessPage, packGuessPageLoader } from '@pages/pack-guess';
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
        Component: PacksPage
      },
      {
        path: ROUTE.PACK_CREATE,
        Component: PacksCreatePage
      },
      {
        path: ROUTE.PACK(':id'),
        Component: PackPage,
        loader: packPageLoader
      },
      {
        path: ROUTE.PACK_GUESS(':id'),
        Component: PackGuessPage,
        loader: packGuessPageLoader
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
