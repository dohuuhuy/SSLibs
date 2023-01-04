import React from 'react'
import { WeekDaysProps } from '../../interface'
import { defineDays, weekDays } from '../../process/contanst'
import CellDays from '../../shares/CellDays'
import styles from './styles.module.scss'


const WeekDays: React.FC<WeekDaysProps> = ({ weekdays = weekDays }) => {
  return (
    <React.Fragment>
      <div className={styles.weekCell}>
        <ul className={styles.listCell}>
          {weekdays.map((v: any, i = 0) => {
            return (
              <li key={i}>
                <CellDays value={v} type={defineDays.CELL_WEEK} />
              </li>
            )
          })}
        </ul>
      </div>
    </React.Fragment>
  )
}

export default WeekDays
