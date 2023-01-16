import { ISSIcon, SSIcon } from 'sslibs';

const IconImg = ({ ...args }: ISSIcon.ImgProps & { name: NameIcon }) => {
  return <SSIcon.ImgIcon {...args} list={listImage} />;
};

export default IconImg;

const listImage = {
  chat: 'https://co.sshop.live/client/assets/images/personal/service/chat.png?t=1673874539752',
  lich: 'https://co.sshop.live/client/assets/images/personal/service/lich.png?t=1673874539752',
};

type NameIcon = keyof typeof listImage;
