import moment from 'moment'
import { useMemo, useState } from 'react'
import { defineDays } from '../process/contanst'
import { calcDays, dataDate } from '../process/func'
import { Solar2Lunar } from '../process/functionLunar'

const useSSCalendar = () => {
  const [date, setDate] = useState(moment())
  const [visible, setVisible] = useState(false)
  const [state, setState] = useState({
    selectedDay: ''
  })

  const handleReload = () => {
    setDate(moment())
  }

  const handlePrev = () => {
    setDate((v: any) => moment(v).subtract(1, 'month'))
  }

  const handleNext = () => {
    setDate((v: any) => moment(v).add(1, 'month'))
  }
  const toggleOverlay = () => {
    setVisible(!visible)
  }

  const selectDayCell = ({ value }: any) => {
    const { year, month } = dataDate({ date })
    const dayNew = moment(
      `${year}-${month + 1}-${value}`,
      defineDays.YYYY_MM_DD
    ).format(defineDays.DD_MM_YYYY)
    setState({ selectedDay: dayNew })
    toggleOverlay()
  }

  const currentLunar = () => {
    const curdate = dataDate({ date: moment() })
    const solar = Solar2Lunar(curdate.day, curdate.curMonth, curdate.year)

    return solar
  }

  const listDay = useMemo(() => {
    return calcDays({ ...dataDate({ date }) })
  }, [date])

  return {
    state,
    visible,
    date,
    listDay,
    handlePrev,
    handleNext,
    handleReload,
    toggleOverlay,
    selectDayCell,
    currentLunar
  }
}

export default useSSCalendar
