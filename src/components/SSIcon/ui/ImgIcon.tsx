import React from 'react'
import Img from '../blocks/Img'
import { ImgProps, IWrapperIconImg } from '../interface'

const ImgIcon = ({ ...args }:IWrapperIconImg & ImgProps) => {
  return (
    <React.Fragment>
      <Img {...args} />
    </React.Fragment>
  )
}

export default ImgIcon
