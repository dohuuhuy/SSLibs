import React from 'react'
import styles from './styles.module.scss'

export type Props = {
  date: any
  handleNext: () => void
  handlePrev: () => void
  handleReload: () => void
  currentLunar: () => {
    dd: number
    mm: any
    yy: number
    ix: any
    LLLL: string
  }
}

const HeaderCalendar = ({
  date,
  handlePrev,
  handleNext,
  handleReload
}: Props) => {
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.txtDate}>Tháng {date.format('MM - YYYY')} </p>
      </div>
      <div className={styles.groupBtn}>
        <div>
          <button onClick={handlePrev}>
            <i className='bi bi-chevron-left' />
          </button>
          <button onClick={handleReload}>
            <i className='bi bi-calendar-date' />
          </button>
          <button onClick={handleNext}>
            <i className='bi bi-chevron-right' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeaderCalendar
