import React from 'react'
import Svg from '../blocks/Svg'
import { IconProps, IWrapperIconSvg } from '../interface'

const SvgIcon = ({ Detail, ...args }: IWrapperIconSvg & IconProps) => {
  return (
    <React.Fragment>
      <Svg {...args}>{Detail && <Detail {...args} />}</Svg>
    </React.Fragment>
  )
}

export default SvgIcon
