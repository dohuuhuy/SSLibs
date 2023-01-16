import cx from 'classnames';
import React from 'react';
import { IconProps } from '../../interface';
import styles from './styles.module.scss';

const Svg = ({
  width,
  fill = '',
  height,
  size = 24,
  stroke,
  children,
  className,
}: IconProps) => {
  const prototype: any = {
    width: width || size,
    height: height || width || size,
    xmlns: 'http://www.w3.org/2000/svg',
    fill: fill,
  };

  if (stroke) {
    prototype.stroke = stroke;
  }

  return (
    <React.Fragment>
      <span
        className={cx(styles.icon, className)}
        style={{
          minHeight: height || width || size,
          width: width || size,
        }}
      >
        <svg {...prototype}>{children}</svg>
      </span>
    </React.Fragment>
  );
};

export default Svg;
