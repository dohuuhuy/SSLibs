import React from 'react'
import { ISSIcon, SSIcon } from 'sslibs'
import { NameIcon } from './interface'

const IconSvg = ({ name, ...args }: ISSIcon.IconProps & { name: NameIcon }) => {
  try {
    return (
      <SSIcon.SvgIcon {...args} Detail={require(`./lib/${name}`).default} />
    )
  } catch (error) {
    console.info('error CSIcon', error)
    return <React.Fragment />
  }
}

export default IconSvg
