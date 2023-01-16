import React from 'react';
import { WeekDaysProps } from '../../interface';
import { defineDays, weekDays } from '../../process/contanst';
import CellDays from '../../shares/CellDays';
import styles from './styles.module.scss';

const WeekDays: React.FC<WeekDaysProps> = ({ weekdays = weekDays }) => {
  return (
    <React.Fragment>
      <div className={styles.weekCell}>
        <ul className={styles.listCell}>
          {weekdays.map((element: any, index = 0) => {
            return (
              <li key={index}>
                <CellDays value={element} type={defineDays.CELL_WEEK} />
              </li>
            );
          })}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default WeekDays;
