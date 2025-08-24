import { mergeProps, useRender } from '@base-ui-components/react';

import styles from './title.module.scss';

export interface TitleProps extends useRender.ComponentProps<'span'> {}

export const Title = ({ render = <span />, ...otherProps }: TitleProps) => {
  const element = useRender({
    render,
    props: mergeProps<'span'>({ className: styles.title }, otherProps)
  });

  return element;
};
