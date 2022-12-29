import { range } from 'lodash'
import moment, { Moment } from 'moment'
import 'moment/locale/vi'
import { CalcDays, ItemDay } from '../interface'
import { defineDays } from './contanst'
import { Solar2Lunar } from './functionLunar'

export type DataDate = { date: Moment }

export const dataDate = ({ date }: DataDate) => {
  const day = date.date()
  const year = date.year() // lấy năm hiện tại
  const month = date.month() // lấy tháng hiện tại

  const daysInMonth = date.daysInMonth() // lấy số ngày trong tháng , ví dụ như 30 ngày

  const dayOfMonth = moment(date).subtract(1, 'months') // lấy tháng vừa rồi
  const dayOf = moment(`${year}-${month + 1}-1`, defineDays.YYYY_MM_DD) // tuần đầu tiền của tháng

  const weekDayOf = dayOf.day() // số ngày củ cua tháng rồi

  const dayNew = moment(
    `${year}-${month + 1}-${daysInMonth}`,
    defineDays.YYYY_MM_DD
  ) // tuần cuối cùng của tháng

  const weekDayNew = dayNew.day() // sô ngày mới của tháng tới

  return {
    day,
    year,
    month,
    curMonth: month + 1,
    daysInMonth,
    dayOfMonth,
    weekDayOf,
    weekDayNew,
    dayNew
  }
}

export const calcDays = ({
  weekDayOf,
  dayOfMonth,
  weekDayNew,
  daysInMonth,
  dayNew,
  year,
  month
}: CalcDays) => {
  const daysOld: ItemDay[] = range(weekDayOf).map((item) => {
    const iday = dayOfMonth.daysInMonth() - weekDayOf + item + 1
    return {
      daysLunar: Solar2Lunar(iday, month, year),
      days: iday,
      type: defineDays.NO_DAYS_IN_MONTH,
      daysSolar: { day: iday, month, year }
    }
  })

  const days: ItemDay[] = range(daysInMonth).map((item) => {
    const isToday =
      formatDate({ day: item + 1, year, month }) ===
      moment().format(defineDays.DD_MM_YYYY)
    return {
      daysLunar: Solar2Lunar(item + 1, month + 1, year),
      days: item + 1,
      type: defineDays.DAYS_IN_MONTH,
      isToday,
      daysSolar: { day: item + 1, month, year }
    }
  })

  const daysNew: ItemDay[] = range(6 - weekDayNew).map(() => {
    const iday = dayNew.add(1, 'day').date()
    return {
      daysLunar: Solar2Lunar(iday, month + 2, year),
      days: iday,
      type: defineDays.NO_DAYS_IN_MONTH,
      daysSolar: { day: iday, month, year }
    }
  })

  return daysOld.concat(days, daysNew)
}

export type FormatDate = {
  day: number
  year: number
  month: number
}
export const formatDate = ({ day, year, month }: FormatDate) => {
  const timeCurr = moment(
    `${year}-${month + 1}-${day}`,
    defineDays.YYYY_MM_DD
  ).format(defineDays.DD_MM_YYYY)

  return timeCurr
}
