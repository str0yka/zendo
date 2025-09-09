import { useState } from 'react';
import { Link as ReactRouterLink, useLoaderData } from 'react-router';

import { PlaceholderPageTemplate } from '@widgets/placeholder-page-template';

import { ROUTE } from '@shared/config';
import { Button, Link, Subtitle } from '@shared/ui';

import type { PackGuessPageLoaderData } from '../model';

import styles from './pack-guess-page.module.scss';

export const PackGuessPage = () => {
  const { pack } = useLoaderData<PackGuessPageLoaderData>();

  const [isAnswered, setIsAnswered] = useState(false);
  const [availableCard, setAvailableCard] = useState(() => pack.getRandomAvailableCard());

  const handleAnswer = () => {
    setIsAnswered(true);
  };

  const handleEvaluate = (ms: number) => () => {
    if (!availableCard) {
      return;
    }

    availableCard.changeAvailableIn(new Date(Date.now() + ms));

    setAvailableCard(() => pack.getRandomAvailableCard());
    setIsAnswered(false);
  };

  if (!availableCard) {
    return (
      <PlaceholderPageTemplate
        emoji="🎉"
        title="wow, congrats!"
        description="cards are left"
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
  }

  return (
    <div className={styles.container}>
      {isAnswered && <Subtitle className={styles.front}>{availableCard.front}</Subtitle>}
      {isAnswered ? availableCard.back : availableCard.front}
      <div className={styles.actionsContainer}>
        {!isAnswered && <Button onClick={handleAnswer}>show answer</Button>}
        {isAnswered && (
          <>
            <Button onClick={handleEvaluate(1000 * 60 * 60 * 24 * 3)}>easy</Button>
            <Button onClick={handleEvaluate(1000 * 60 * 10)}>good</Button>
            <Button onClick={handleEvaluate(1000 * 60 * 6)}>hard</Button>
            <Button onClick={handleEvaluate(1000 * 60 * 1)}>again</Button>
          </>
        )}
      </div>
    </div>
  );
};
