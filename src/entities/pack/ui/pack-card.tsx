import { numericFormatter } from 'react-number-format';

import { EllipsisText, Link, Subtitle, Text, Title } from '@shared/ui';

import { MAX_VISIBLE_COUNT } from '../config';

import styles from './pack-card.module.scss';

export interface PackCardProps {
  count: number;
  title: string;
  description?: string;
  tags?: string[];
  after?: React.ReactNode;
}

export const PackCard = ({ count, title, description, tags }: PackCardProps) => {
  const visibleCount = numericFormatter(String(Math.min(count, MAX_VISIBLE_COUNT)), {
    thousandSeparator: ' ',
    ...(count > MAX_VISIBLE_COUNT && { suffix: '+' })
  });

  return (
    <article className={styles.card}>
      <div className={styles.counterContainer}>
        <Text className={styles.counter}>{visibleCount}</Text>
      </div>
      <div className={styles.content}>
        <Title
          render={<EllipsisText render={<h2 />} />}
          className={styles.title}
        >
          {title}
        </Title>
        {!!description && (
          <Subtitle
            render={
              <EllipsisText
                lines={2}
                render={<p />}
              />
            }
            className={styles.subtitle}
          >
            {description}
          </Subtitle>
        )}
        {tags && (
          <div className={styles.tags}>
            {tags.map((tag) => (
              <Link className={styles.tag}>{tag}</Link>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};
