import moment from 'moment';
import { useEffect, useState } from 'react';
import { calcTime, initTime } from '../proccess/func';
import { InitTime, SSCountDownProps } from '../interface';

const useSSCountDown = ({ timeInput }: SSCountDownProps) => {
  const [state, setState] = useState<InitTime>(initTime);
  const [status, setStatus] = useState(true);

  useEffect(() => {
    const timeThen = timeInput || moment().add(2, 'minute').toISOString();

    const interval = setInterval(() => {
      const result = calcTime(timeThen);
      if (result.status) {
        setState(result.timeOutput);
      } else {
        setState(initTime);
        setStatus(false);
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timeInput]);

  return { timeOutput: state, status };
};

export default useSSCountDown;
