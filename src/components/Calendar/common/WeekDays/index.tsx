import CellDays from '../CellDays'
import { defineDays, weekDays } from '../../process/contanst'
import styles from './styles.module.scss'
import React from 'react'

const WeekDays = () => {
  return (
    <div className={styles.weekCell}>
      <ul className={styles.listCell}>
        {weekDays.map((v: any, i = 0) => {
          return (
            <li key={i}>
              <CellDays value={v} type={defineDays.CELL_WEEK} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default WeekDays
