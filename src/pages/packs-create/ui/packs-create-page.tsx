import { Button, Emoji, Input, Subtitle, Title } from '@shared/ui';

import styles from './packs-create-page.module.scss';

export const PacksCreatePage = () => (
  <div className={styles.container}>
    <Emoji>😎</Emoji>
    <Title>what shall we call it?</Title>
    <Subtitle>come up with a name for your pack</Subtitle>
    <form className={styles.form}>
      <Input placeholder="english words b1" />
      <Button render={<button />}>next step</Button>
    </form>
  </div>
);
