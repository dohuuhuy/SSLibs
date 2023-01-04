import cx from 'classnames'
import React from 'react'
import { WrapperProps } from '../../interface'
import styles from './styles.module.scss'

const WrapperCalendar: React.FC<WrapperProps> = ({ children, wapperCls }) => {
  return <div className={cx(styles.calendar, wapperCls)}>{children}</div>
}

export default WrapperCalendar
