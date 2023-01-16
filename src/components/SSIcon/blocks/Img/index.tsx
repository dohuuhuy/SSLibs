import cx from 'classnames';
import React from 'react';
import { ImgProps, IWrapperIconImg } from '../../interface';
import styles from './styles.module.scss';

const Img = ({
  width,
  height,
  size = 120,
  className,
  list,
  name,
  styleFigure,
}: IWrapperIconImg & ImgProps) => {
  const imgUrl = list[name];

  const prototypeFigure: any = {
    style: Object.assign(
      {
        minHeight: height || width || size,
        width: width || size,
      },
      styleFigure,
    ),
    className: cx(styles.wrapper, className),
  };

  const prototypeImg: any = {
    src: imgUrl,
  };

  return (
    <React.Fragment>
      <figure {...prototypeFigure}>
        <img {...prototypeImg} />
      </figure>
    </React.Fragment>
  );
};

export default Img;
