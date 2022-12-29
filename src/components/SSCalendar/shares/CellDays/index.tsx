import cx from 'classnames'
import React from 'react'
import { LunarType, SelectDayArgs } from '../../interface'
import { defineDays } from '../../process/contanst'
import styles from './styles.module.scss'

export type CellDaysProps = {
  daysLunar?: LunarType
  days?: number
  type: string
  isToday?: boolean
  daysSolar?: {
    day: number
    year: any
    month: any
  }
  onSelectDay?: ((args: SelectDayArgs) => void) | undefined
  value: number
}

const CellDays = (props: CellDaysProps) => {
  const { isToday, type, daysLunar, value } = props

  const styleToday = isToday ? styles.today : {}

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

  const showMonth = daysLunar?.dd === 1 ? '/' + daysLunar?.mm : ''

  return (
    <div
      className={cx(handleStyle().cell, styleToday, styles.cell)}
      onClick={() => props.onSelectDay?.({ ...props })}
    >
      <p className={cx(handleStyle().txt)}>{value}</p>
      {type !== defineDays.CELL_WEEK && (
        <p className={cx(styles.txtLunar)}>{daysLunar?.dd + showMonth}</p>
      )}
    </div>
  )
}

export default React.memo(CellDays)
