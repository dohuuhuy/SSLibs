import { CSSProperties } from 'react';

export type IWrapperIconSvg = {
  Detail: any;
};

export type IconProps = {
  width?: number;
  height?: number;
  children?: React.ReactNode;

  fill?: any;
  stroke?: any;

  size?: number;
  className?: any;
};

export type IWrapperIconImg = {
  name: string;
  list: {
    [T: string]: string;
  };
};

export type ImgProps = {
  width?: number;
  height?: number;
  size?: number;
  className?: any;
  styleFigure?: CSSProperties;
};
