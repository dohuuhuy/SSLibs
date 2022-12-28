import React from 'react'
import CellDays from '../../common/CellDays'
import styles from './styles.module.scss'

export interface Props {
  dayss: never[]
  visible: boolean
  selectDayCell: ({ value }: any) => void
}

const Days = ({ dayss, selectDayCell }: Props) => {
  return (
    <div className={styles.containerDays}>
      <ul>
        {dayss.map((v: any, i = 0) => {
          return (
            <li key={i}>
              <CellDays
                selectDayCell={selectDayCell}
                lunar={v.daysLunar}
                value={v.days}
                isTodays={v.isToday}
                type={v.type}
                {...v}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Days
