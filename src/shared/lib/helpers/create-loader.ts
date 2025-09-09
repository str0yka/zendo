import type { LoaderFunction } from 'react-router';

import { sleep } from './sleep';

export const createLoader =
  <Data>(fn: (...args: Parameters<LoaderFunction>) => Data | Promise<Data>) =>
  async (...args: Parameters<LoaderFunction>) => {
    await sleep(0);

    return fn(...args);
  };
