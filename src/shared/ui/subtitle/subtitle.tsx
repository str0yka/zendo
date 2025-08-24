import { mergeProps, useRender } from '@base-ui-components/react';

import styles from './subtitle.module.scss';

export interface SubtitleProps extends useRender.ComponentProps<'span'> {}

export const Subtitle = ({ render = <span />, ...otherProps }: SubtitleProps) => {
  const element = useRender({
    render,
    props: mergeProps<'span'>({ className: styles.subtitle }, otherProps)
  });

  return element;
};
