import CellDays from '../../shares/CellDays'
import styles from './styles.module.scss'
import React from 'react'

const Days: React.FC<DaysProps> = ({ data, selectDayCell }) => {
  return (
    <div className={styles.containerDays}>
      <ul className={styles.listCell}>
        {data.map((v: any, i = 0) => {
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

export interface DaysProps {
  data: any[]
  selectDayCell?: ({ value }: any) => void
}
