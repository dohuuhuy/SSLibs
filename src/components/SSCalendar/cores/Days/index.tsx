import React from 'react'
import { DaysProps } from '../../interface'
import CellDays from '../../shares/CellDays'
import styles from './styles.module.scss'

const Days: React.FC<DaysProps> = ({
  data,
  onSelectDay,
  showLunar = true,
  chooseItem,
  activeCls
}) => {
  return (
    <div className={styles.containerDays}>
      <ul className={styles.listCell}>
        {data.map((v, i = 0) => {
          const passProps = {
            onSelectDay,
            value: v.days,
            ...v,
            showLunar,
            chooseItem,
            activeCls
          } as const

          return (
            <li key={i}>
              <CellDays {...passProps} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Days
