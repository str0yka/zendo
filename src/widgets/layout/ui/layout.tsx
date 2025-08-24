import { Container } from '@shared/ui';

import { Header } from './header';
import styles from './layout.module.scss';

export interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <Container
      render={<main />}
      className={styles.main}
    >
      {children}
    </Container>
  </>
);
