import type { useRender } from '@base-ui-components/react';
import { Input } from '@base-ui-components/react/input';
import clsx from 'clsx';

import styles from './textarea.module.scss';

export interface TextareaProps extends Omit<useRender.ComponentProps<'textarea'>, 'render'> {
  lines?: number;
}

export const Textarea = ({ className, style, lines = 3, ...otherProps }: TextareaProps) => (
  <Input
    render={<textarea {...otherProps} />}
    className={clsx(styles.textarea, className)}
    style={
      {
        ...style,
        '--zendo--textarea-lines': lines
      } as React.CSSProperties
    }
  />
);
