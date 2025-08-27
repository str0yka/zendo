import { zodResolver } from '@hookform/resolvers/zod';
import { observer } from 'mobx-react-lite';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import z from 'zod';

import { packsStore } from '@entities/pack';

import { ROUTE } from '@shared/config';
import { Button, Emoji, Input, Subtitle, Title } from '@shared/ui';

import styles from './packs-create-page.module.scss';

const createPackFormScheme = z.object({
  name: z.string()
});

type CreatePackFormValues = z.infer<typeof createPackFormScheme>;

export const PacksCreatePage = observer(() => {
  const navigate = useNavigate();

  const createPackForm = useForm({
    defaultValues: {
      name: ''
    },
    resolver: zodResolver(createPackFormScheme)
  });

  const onSubmit = ({ name }: CreatePackFormValues) => {
    packsStore.addPack({ name });
    navigate(ROUTE.PACKS);
  };

  return (
    <div className={styles.container}>
      <Emoji>😎</Emoji>
      <Title>what shall we call it?</Title>
      <Subtitle>come up with a name for your pack</Subtitle>
      <form
        className={styles.form}
        onSubmit={createPackForm.handleSubmit(onSubmit)}
      >
        <Controller
          control={createPackForm.control}
          name="name"
          render={({ field }) => (
            <Input
              {...field}
              placeholder="english words b1"
            />
          )}
        />
        <Button type="submit">next step</Button>
      </form>
    </div>
  );
});
