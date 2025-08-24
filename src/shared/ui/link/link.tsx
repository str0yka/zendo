import { mergeProps, useRender } from '@base-ui-components/react';

import styles from './link.module.scss';

export interface LinkProps extends useRender.ComponentProps<'a'> {}

export const Link = ({ render = <a />, ...otherProps }: LinkProps) => {
  const element = useRender({
    render,
    props: mergeProps<'a'>({ className: styles.link }, otherProps)
  });

  return element;
};
