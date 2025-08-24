import { mergeProps, useRender } from '@base-ui-components/react';

import styles from './emoji.module.scss';

export interface EmojiProps extends useRender.ComponentProps<'span'> {}

export const Emoji = ({ render = <span />, ...otherProps }: EmojiProps) => {
  const element = useRender({
    render,
    props: mergeProps<'span'>({ className: styles.emoji }, otherProps)
  });

  return element;
};
