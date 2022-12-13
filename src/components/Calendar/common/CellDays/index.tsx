import cx from 'classnames'
import React from 'react'
import { defineDays } from '../../process/contanst'
import styles from './styles.module.scss'

const CellDays = ({ value, index, type, isTodays, selectItem, lunar }: any) => {
  const styleToday = isTodays ? styles.today : {}

  const handleStyle = () => {
    switch (type) {
      case defineDays.CELL_WEEK:
        return {
          cell: styles.cellWeek,
          txt: styles.cellTxtWeek
        }

      case defineDays.NO_DAYS_IN_MONTH:
        return {
          cell: {},
          txt: styles.txtFaded
        }

      case defineDays.DAYS_IN_MONTH:
        return {
          cell: {},
          txt: styles.txtCell
        }

      default:
        return { cell: {}, txt: {} }
    }
  }

  const showMonth = lunar?.dd === 1 ? '/' + lunar?.mm : ''

  return (
    <div
      className={cx(handleStyle().cell, styleToday, styles.cell)}
      onClick={() => selectItem?.({ value, index, type, isTodays })}
    >
      <p className={cx(handleStyle().txt)}>{value}</p>
      {type !== defineDays.CELL_WEEK && (
        <p className={cx(styles.txtLunar)}>{lunar?.dd + showMonth}</p>
      )}
    </div>
  )
}

export default React.memo(CellDays)
