import cx from 'classnames'
import React from 'react'
import { ImgProps } from '../../interface'
import styles from './styles.module.scss'

const Img = ({ width, height, size, className }: ImgProps) => {
  const prototype: any = {
    width: width || size,
    height: height || width || size
  }

  return (
    <React.Fragment>
      <figure
        className={cx(styles.img, className)}
        style={{
          minHeight: height || width || size,
          width: width || size
        }}
      >
        <image {...prototype} />
      </figure>
    </React.Fragment>
  )
}

export default Img
