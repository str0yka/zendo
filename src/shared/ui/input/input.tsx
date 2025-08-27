import type { useRender } from '@base-ui-components/react';
import { Input as BaseInput } from '@base-ui-components/react/input';
import clsx from 'clsx';

import styles from './input.module.scss';

export interface InputProps extends Omit<useRender.ComponentProps<'input'>, 'render'> {}

export const Input = ({ className, ...otherProps }: InputProps) => (
  <BaseInput
    {...otherProps}
    className={clsx(styles.input, className)}
  />
);
