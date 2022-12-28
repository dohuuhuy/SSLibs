import Days from '../../cores/Days'
import HeaderCalendar from '../../cores/HeaderCalendar'
import SSCalendarWapper from '../../cores/WapperCalendar'
import WeekDays from '../../cores/WeekDays'
import useSSCalendar from '../../hook'
import React from 'react';

const SSCalendarUI:React.FC = () => {
  const {
    date,
    handleNext,
    handlePrev,
    handleReload,
    listDay,
    currentLunar
  } = useSSCalendar()

  const methodHeader = {
    date,
    handleNext,
    handlePrev,
    handleReload,
    currentLunar
  }

  const methodDays = { data: listDay }

  return (
    <SSCalendarWapper>
      <HeaderCalendar {...methodHeader} />
      <WeekDays />
      <Days {...methodDays} />
    </SSCalendarWapper>
  )
}

export default SSCalendarUI
