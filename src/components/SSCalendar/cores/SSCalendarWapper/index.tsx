import cx from 'classnames'
import React from 'react'
import styles from './styles.module.scss'

const SSCalendarWapper: React.FC<WapperProps> = ({ children, wapperCls }) => {
  return <div className={cx(styles.calendar, wapperCls)}>{children}</div>
}

export default SSCalendarWapper

export type WapperProps = {
  wapperCls?: string
  children: React.ReactNode
}
