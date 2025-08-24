import { Link as ReactRouterLink } from 'react-router';

import { ROUTE } from '@shared/config';
import { Link } from '@shared/ui';

import styles from './header.module.scss';

export const Header = () => (
  <header className={styles.header}>
    <Link render={<ReactRouterLink to={ROUTE.PACKS} />}>zendo 🎴</Link>
  </header>
);
