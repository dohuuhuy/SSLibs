export type CalcDays = {
  year: any
  month: any
  daysInMonth: any
  dayOfMonth: moment.Moment
  weekDayOf: number
  weekDayNew: number
  dayNew: moment.Moment
}

export type DaySolarType = {
  day: number
  month: any
  year: any
}

export type ItemDay = {
  daysLunar: LunarType
  days: number
  type: string
  isToday?: boolean
  daysSolar?: DaySolarType
}

export interface LunarType {
  dd: number
  mm: any
  yy: number
  ix: any
  LLLL: string
  DM: string
}

export type SelectDayArgs = {
  daysLunar?: LunarType
  days?: number
  type: string
  isToday?: boolean
  daysSolar?: DaySolarType
  value: number
}
