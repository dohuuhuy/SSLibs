import cx from 'classnames'
import { isEqual } from 'lodash'
import moment from 'moment'
import React from 'react'
import styles from './styles.module.scss'

const HeaderCalendar: React.FC<HeaderProps> = ({
  date = moment(),
  handlePrev,
  handleNext,
  handleReload,
  cls,
  set
}) => {
  const listBtn: ItemtBtn[] = [
    {
      id: 'prev',
      onclick: handlePrev,
      label: 'Trước'
    },
    {
      id: 'cur',
      onclick: handleReload,
      label: 'Hiện tại'
    },
    {
      id: 'next',
      onclick: handleNext,
      label: 'Sau'
    }
  ]

  return (
    <div className={cx(styles.headerCalendar, cls?.wapper)}>
      <div className={cx(styles.viewCurDate, cls?.viewCurDate)}>
        <p className={styles.txtDate}>Tháng {date?.format('MM - YYYY')} </p>
      </div>
      <div className={cx(styles.groupBtn, cls?.groupBtn)}>
        {listBtn.map((v, i) => {
          const _set = set?.[v.id]

          return (
            <button
              key={i}
              className={cx(styles.btn, _set?.btnClass, cls?.btn)}
              onClick={v.onclick}
            >
              <React.Fragment>
                {isEqual(_set?.iconALign, 'left') && _set?.icon}
                <span className={cx(styles.txtBtn, _set?.txtBtnClass)}>
                  {_set?.label || v.label}
                </span>
                {isEqual(_set?.iconALign, 'right') && _set?.icon}
              </React.Fragment>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default HeaderCalendar

export type KeyBtn = 'prev' | 'cur' | 'next'

export type HeaderProps = {
  date?: any
  handleNext?: () => void
  handlePrev?: () => void
  handleReload?: () => void
  currentLunar?: () => {
    dd: number
    mm: any
    yy: number
    ix: any
    LLLL: string
  }
  cls?: {
    wapper?: string
    viewCurDate?: string
    groupBtn?: string
    btn?: string
  }
  set?: {
    [K in KeyBtn]?: {
      label?: string
      btnClass?: string
      txtBtnClass?: string
      icon?: any
      iconALign?: 'right' | 'left'
    }
  }
}

export type ItemtBtn = {
  id: KeyBtn
  onclick: (() => void) | undefined
  label: string
}
