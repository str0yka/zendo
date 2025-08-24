import { mergeProps } from '@base-ui-components/react/merge-props';
import { useRender } from '@base-ui-components/react/use-render';

import styles from './button.module.scss';

interface ButtonProps extends useRender.ComponentProps<'button'> {}

export const Button = ({ render = <button />, ...otherProps }: ButtonProps) => {
  const defaultProps: useRender.ElementProps<'button'> = {
    className: styles.button,
    type: 'button'
  };

  const element = useRender({
    render,
    props: mergeProps<'button'>(defaultProps, otherProps)
  });

  return element;
};
