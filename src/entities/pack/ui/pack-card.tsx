import { numericFormatter } from 'react-number-format';

import { EllipsisText, Link, Subtitle, Text, Title } from '@shared/ui';

import { MAX_VISIBLE_COUNT } from '../config';

import styles from './pack-card.module.scss';

export interface PackCardProps {
  count: number;
  title: string;
  description?: string;
  after?: React.ReactNode;
}

const TAGS = ['📖 english', '📖 russian', '📖 fr', '📖 gb', '📖 ge', '📖 ja'];

export const PackCard = ({ count, title, description }: PackCardProps) => {
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
        {Math.round(Math.random() * 100) % 2 === 0 ? (
          <div className={styles.tags}>
            {TAGS.map((tag) => (
              <Link className={styles.tag}>{tag}</Link>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
};
