import cx from 'classnames'
import { isEqual } from 'lodash'
import moment from 'moment'
import React from 'react'
import { HeaderProps } from '../../interface'
import { renderListBtn } from '../../process/func'
import styles from './styles.module.scss'

const HeaderCalendar: React.FC<HeaderProps> = (props) => {
  const {
    date = moment(),
    handlePrev,
    handleNext,
    handleReload,
    cls,
    set
  } = props

  return (
    <div className={cx(styles.headerCalendar, cls?.wapper)}>
      <div className={cx(styles.viewCurDate, cls?.viewCurDate)}>
        <p className={styles.txtDate}>Tháng {date?.format('MM - YYYY')} </p>
      </div>
      <div className={cx(styles.groupBtn, cls?.groupBtn)}>
        {renderListBtn({ handlePrev, handleNext, handleReload } as const).map(
          (v, i) => {
            const _set = set?.[v.id]

            return (
              <button
                key={i}
                className={cx(styles.btn, _set?.btnClass, cls?.btn)}
                onClick={v?.onclick}
              >
                <React.Fragment>
                  {isEqual(_set?.iconALign, 'left') && _set?.icon}
                  <span className={cx(styles.txtBtn, _set?.txtBtnClass)}>
                    {[false, null, '', ' '].includes(_set?.label as any)
                      ? null
                      : _set?.label || v.label}
                  </span>
                  {isEqual(_set?.iconALign, 'right') && _set?.icon}
                </React.Fragment>
              </button>
            )
          }
        )}
      </div>
    </div>
  )
}

export default HeaderCalendar
