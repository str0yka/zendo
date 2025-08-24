import { mergeProps, useRender } from '@base-ui-components/react';

import styles from './ellipsis-text.module.scss';

export interface EllipsisTextProps extends useRender.ComponentProps<'span'> {
  lines?: number;
}

export const EllipsisText = ({
  lines = 1,
  render = <span />,
  ...otherProps
}: EllipsisTextProps) => {
  const element = useRender({
    render,
    props: mergeProps<'span'>(
      {
        className: styles.ellipsisText,
        style: { '--zendo--text-clamp-lines': lines } as React.CSSProperties
      },
      otherProps
    )
  });

  return element;
};
