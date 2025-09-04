import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
import { Fragment, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import z from 'zod';

import { isCardAvailable, packsStore } from '@entities/pack';

import { Button, Text, Textarea, Title } from '@shared/ui';

import { CARD_SEPARATOR, FRONT_BACK_SEPARATOR } from '../config';
import { parseInputToCards } from '../lib';
import type { PackPageParams } from '../model';

import styles from './pack-page.module.scss';

const addCardsFormScheme = z.object({
  input: z.string()
});

export const PackPage = observer(() => {
  const params = useParams<PackPageParams>();

  const pack = useMemo(() => {
    return packsStore.getPack({ id: params.id! });
  }, [params.id]);

  const addCardsForm = useForm({
    defaultValues: { input: '' },
    resolver: zodResolver(addCardsFormScheme)
  });

  const onSubmit = addCardsForm.handleSubmit(({ input }) => {
    const cards = parseInputToCards(input);

    console.log(cards);

    pack.addCards({ cards });
  });

  return (
    <>
      <div className={styles.header}>
        <Button>start</Button>
      </div>
      <form
        className={styles.fieldContainer}
        onSubmit={onSubmit}
      >
        <Title>import cards</Title>
        <Controller
          control={addCardsForm.control}
          name="input"
          render={({ field }) => (
            <Textarea
              {...field}
              className={styles.textarea}
              lines={8}
              placeholder={`front-1${FRONT_BACK_SEPARATOR}back-1${CARD_SEPARATOR}front-2${FRONT_BACK_SEPARATOR}back-2`}
            />
          )}
        />
        <Button
          type="submit"
          className={styles.fieldButton}
        >
          import
        </Button>
      </form>
      <div className={styles.tableContainer}>
        <Title>cards ({pack.cards.length})</Title>
        <div className={styles.table}>
          <div className={clsx(styles.cell, styles.headerCell)}>
            <Title>front</Title>
          </div>
          <div className={clsx(styles.cell, styles.headerCell)}>
            <Title>back</Title>
          </div>
          <div className={clsx(styles.cell, styles.headerCell)}>
            <Title>is available</Title>
          </div>
          {pack.cards.map((card) => (
            <Fragment key={card.id}>
              <div className={styles.cell}>
                <Text>{card.front}</Text>
              </div>
              <div className={styles.cell}>
                <Text>{card.back}</Text>
              </div>
              <div className={styles.cell}>
                <Text>{isCardAvailable(card) ? 'yes' : 'no'}</Text>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
});
