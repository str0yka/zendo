import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { Link as ReactRouterLink } from 'react-router';
import z from 'zod';

import { PackCard } from '@entities/pack';

import { ROUTE } from '@shared/config';
import { Emoji, Input, Link, Subtitle, Title } from '@shared/ui';

import styles from './packs-page.module.scss';

const PACKS = [
  {
    count: 12,
    title:
      'some long long long titlesome long long long titlesome long long long titlesome long long long title',
    description:
      'descriptions descriptionsdescriptions descriptionsdescriptions descriptionsdescriptions descriptionsdescriptions descriptionsdescriptions descriptionsdescriptions descriptionsdescriptions descriptionsdescriptions descriptionsdescriptions descriptionsdescriptions descriptions'
  }
];

const searchPacksFormScheme = z.object({
  search: z.string()
});

export const PacksPage = () => {
  const searchPacksForm = useForm({
    defaultValues: {
      search: ''
    },
    resolver: zodResolver(searchPacksFormScheme)
  });

  const searchValue = searchPacksForm.watch('search');

  const filteredPacks = PACKS.filter((pack) =>
    pack.title.toLowerCase().includes(searchValue.toLowerCase())
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
          {filteredPacks.map((_, id) => (
            <ReactRouterLink
              key={id}
              to={ROUTE.PACK(id)}
            >
              <PackCard
                count={12}
                title="some long long long titlesome long long long titlesome long long long titlesome long long long title"
                description="descriptions descriptionsdescriptions descriptionsdescriptions descriptionsdescriptions descriptionsdescriptions descriptionsdescriptions descriptionsdescriptions descriptionsdescriptions descriptionsdescriptions descriptionsdescriptions descriptionsdescriptions descriptions"
              />
            </ReactRouterLink>
          ))}
        </section>
      )}
    </>
  );
};
