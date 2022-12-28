import React from 'react'
import Days from './common/Days'
import HeaderCalendar from './common/HeaderCalendar'
import WeekDays from './common/WeekDays'
import useDataCalendar from './HOCs/useDataCalendar'
import styles from './styles.module.scss'

const SSCalendar = () => {
  const {
    date,
    handleNext,
    handlePrev,
    handleReload,
    dayss,
    visible,
    selectDayCell,
    currentLunar
  } = useDataCalendar()

  const methodHeader = {
    date,
    handleNext,
    handlePrev,
    handleReload,
    currentLunar
  }
  const methodDays = { dayss, visible, selectDayCell }

  return (
    <div className={styles.calendar}>
      <HeaderCalendar {...methodHeader} />
      <WeekDays />
      <Days {...methodDays} />
    </div>
  )
}

export default SSCalendar
