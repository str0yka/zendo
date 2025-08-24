import { Emoji, Subtitle, Title } from '@shared/ui';

import styles from './placeholder-page-template.module.scss';

interface PlaceholderPageTemplateProps {
  emoji: string;
  title: string;
  description?: string;
  after?: React.ReactNode;
}

export const PlaceholderPageTemplate = ({
  emoji,
  title,
  description,
  after
}: PlaceholderPageTemplateProps) => (
  <div className={styles.container}>
    <Emoji>{emoji}</Emoji>
    <Title>{title}</Title>
    <Subtitle>{description}</Subtitle>
    {after}
  </div>
);
