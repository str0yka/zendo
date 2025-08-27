import { zodResolver } from '@hookform/resolvers/zod';
import { observer } from 'mobx-react-lite';
import { Controller, useForm } from 'react-hook-form';
import { Link as ReactRouterLink } from 'react-router';
import z from 'zod';

import { PackCard, packsStore } from '@entities/pack';

import { ROUTE } from '@shared/config';
import { Emoji, Input, Link, Subtitle, Title } from '@shared/ui';

import styles from './packs-page.module.scss';

const searchPacksFormScheme = z.object({
  search: z.string()
});

export const PacksPage = observer(() => {
  const searchPacksForm = useForm({
    defaultValues: {
      search: ''
    },
    resolver: zodResolver(searchPacksFormScheme)
  });

  const searchValue = searchPacksForm.watch('search');

  const filteredPacks = packsStore.packs.filter((pack) =>
    pack.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <nav className={styles.navigation}>
        <Controller
          control={searchPacksForm.control}
          name="search"
          render={({ field }) => (
            <Input
              {...field}
              placeholder="search pack"
            />
          )}
        />
        <Link render={<ReactRouterLink to={ROUTE.PACK_CREATE} />}>create pack</Link>
      </nav>
      {!filteredPacks.length && (
        <div className={styles.placeholder}>
          <Emoji>😳</Emoji>
          <Title>oh, where is everything?</Title>
          <Subtitle>we couldn't find anything</Subtitle>
        </div>
      )}
      {!!filteredPacks.length && (
        <section className={styles.list}>
          {filteredPacks.map((pack) => (
            <ReactRouterLink
              key={pack.id}
              to={ROUTE.PACK(pack.id)}
            >
              <PackCard
                title={pack.name}
                description={pack.description}
                count={pack.cards.length}
              />
            </ReactRouterLink>
          ))}
        </section>
      )}
    </>
  );
});
