import { mergeProps, useRender } from '@base-ui-components/react';

import styles from './container.module.scss';

export interface ContainerProps extends useRender.ComponentProps<'div'> {}

export const Container = ({ render = <div />, ...otherProps }: ContainerProps) => {
  const element = useRender({
    render,
    props: mergeProps<'div'>({ className: styles.container }, otherProps)
  });

  return element;
};
