import { mergeProps, useRender } from '@base-ui-components/react';

import styles from './text.module.scss';

export interface TextProps extends useRender.ComponentProps<'span'> {}

export const Text = ({ render = <span />, ...otherProps }: TextProps) => {
  const element = useRender({
    render,
    props: mergeProps<'span'>({ className: styles.text }, otherProps)
  });

  return element;
};
