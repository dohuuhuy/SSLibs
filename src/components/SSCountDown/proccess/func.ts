import moment from 'moment';
import { InitTime, RenderTime } from '../interface';

export const initTime = {
  days: '00',
  hours: '00',
  minutes: '00',
  seconds: '00',
};

export const handingTime = (item: any) => {
  return item < 10 ? `0${item}` : item;
};

export const calcTime = (timeThen: string) => {
  const now: any = moment().utc();
  const then: any = moment(timeThen).utc();

  const times = then.diff(now);

  const seconds = Math.floor((times / 1000) % 60);
  const minutes = Math.floor((times / 1000 / 60) % 60);
  const hours = Math.floor((times / (1000 * 60 * 60)) % 24);
  const days = Math.floor(times / (1000 * 60 * 60 * 24));

  if (times <= 0) {
    return {
      status: true,
      timeOutput: initTime,
    };
  } else {
    const timeOutput = {
      days: handingTime(days),
      hours: handingTime(hours),
      minutes: handingTime(minutes),
      seconds: handingTime(seconds),
    };
    return {
      status: true,
      timeOutput,
    };
  }
};

export const renderTime = (state: InitTime): RenderTime[] => {
  const { days, hours, minutes, seconds } = state;

  return [
    {
      key: 'days',
      num: days,
      txt: 'Ngày',
    },
    {
      key: 'hours',
      num: hours,
      txt: 'Giờ',
    },
    {
      key: 'minutes',
      num: minutes,
      txt: 'Phút',
    },
    {
      key: 'seconds',
      num: seconds,
      txt: 'Giây',
    },
  ];
};
