import Days from './cores/Days'
import HeaderCalendar from './cores/HeaderCalendar'
import WeekDays from './cores/WeekDays'
import WrapperCalendar from './cores/WrapperCalendar'
import useSSCalendar from './hook'
import * as ICalendar from './interface'
import SSCalendarUI from './ui/SSCalendarUI'

export {
  Days,
  WrapperCalendar,
  HeaderCalendar,
  WeekDays,
  SSCalendarUI,
  useSSCalendar
}

export default {
  Days,
  WrapperCalendar,
  HeaderCalendar,
  WeekDays,
  SSCalendarUI,
  useSSCalendar,
  ...ICalendar
}
