import React from 'react'
import Img from '../blocks/Img'
import { IconProps, IWrapperIcon } from '../interface'

const ImgIcon = ({ Detail, ...args }: IWrapperIcon & IconProps) => {
  return (
    <React.Fragment>
      <Img {...args} />
    </React.Fragment>
  )
}

export default ImgIcon
