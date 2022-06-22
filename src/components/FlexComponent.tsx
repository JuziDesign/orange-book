import classNames from 'classnames';
import React, { CSSProperties } from 'react';

type cssTypes = {
  [key in keyof React.CSSProperties]?: React.CSSProperties[key];
};
interface FlexComponentProps
  extends cssTypes,
    Omit<React.HTMLProps<HTMLDivElement>, 'content' | 'height' | 'color' | 'translate' | 'width'> {
  children: React.ReactNode[] | React.ReactNode;
  directions?: 'row' | 'column';
  row?: CSSProperties['justifyContent'];
  col?: CSSProperties['alignItems'];
  className?: string;
  onClick?: React.HTMLAttributes<HTMLDivElement>['onClick'];
  showBackgroundColor?: boolean;
  style?: React.CSSProperties;
  mode?: 'block' | 'inline';
}

//  Flex组件 用于简化flex布局的使用成本
export const FlexComponent: React.FC<FlexComponentProps> = props => {
  const {
    children,
    row,
    col,
    directions = 'row',
    onClick,
    showBackgroundColor = false,
    className,
    onMouseEnter,
    onMouseLeave,
    style = {},
    mode = 'block',
    ...restProps
  } = props;
  const styles = {} as CSSProperties;
  if (row) {
    styles.justifyContent = row;
  }
  if (col) {
    styles.alignItems = col;
  }
  return (
    <div
      className={classNames(
        'flex-component',
        {
          'flex-component-click': typeof onClick === 'function' && showBackgroundColor,
          'flex-component-inline': mode === 'inline',
        },
        className,
      )}
      onClick={onClick}
      style={{
        flexDirection: directions as any,
        cursor: typeof onClick === 'function' ? 'pointer' : 'inherit',
        ...styles,
        ...restProps,
        ...style,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};
