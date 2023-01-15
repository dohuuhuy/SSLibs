import React from 'react'
import { IconProps, IWrapperIcon } from '../interface'
import Svg from '../Svg'

const SvgIcon = ({ Detail, ...args }: IWrapperIcon & IconProps) => {
  return (
    <React.Fragment>
      <Svg {...args}>{Detail && <Detail {...args} />}</Svg>
    </React.Fragment>
  )
}

export default SvgIcon
