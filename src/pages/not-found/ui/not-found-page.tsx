import { Link as ReactRouterLink } from 'react-router';

import { PlaceholderPageTemplate } from '@widgets/placeholder-page-template';

import { ROUTE } from '@shared/config';
import { Link } from '@shared/ui';

import styles from './not-found-page.module.scss';

export const NotFoundPage = () => (
  <PlaceholderPageTemplate
    emoji="🧐"
    title="oh, where are we?"
    description="this page does not exist"
    after={
      <Link
        className={styles.link}
        render={<ReactRouterLink to={ROUTE.PACKS} />}
      >
        go to packs
      </Link>
    }
  />
);
