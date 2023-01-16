import React from 'react';
import { ISSIcon, SSIcon } from 'sslibs';
import { NameIcon } from './interface';

const IconImg = ({ name, ...args }: ISSIcon.ImgProps & { name: NameIcon }) => {
  try {
    return (
      <SSIcon.SvgIcon {...args} Detail={require(`./lib/${name}`).default} />
    );
  } catch (error) {
    console.info('error CSIcon', error);
    return <React.Fragment />;
  }
};

export default IconImg;
