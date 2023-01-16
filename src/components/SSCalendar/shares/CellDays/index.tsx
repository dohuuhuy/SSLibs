import cx from 'classnames';
import React from 'react';
import { CellDaysProps } from '../../interface';
import { defineDays } from '../../process/contanst';
import styles from './styles.module.scss';

const CellDays: React.FC<CellDaysProps> = (props) => {
  const {
    isToday,
    type,
    daysLunar,
    value,
    showLunar,
    activeCls,
    chooseItem,
    daysSolar,
  } = props;
  const styleToday = isToday ? styles.today : {};

  const handleStyle = () => {
    switch (type) {
      case defineDays.CELL_WEEK:
        return {
          cell: styles.cellWeek,
          txt: styles.cellTxtWeek,
        };

      case defineDays.NO_DAYS_IN_MONTH:
        return {
          cell: {},
          txt: styles.txtFaded,
        };

      case defineDays.DAYS_IN_MONTH:
        return {
          cell: {},
          txt: styles.txtCell,
        };

      default:
        return { cell: {}, txt: {} };
    }
  };

  const isFirstDayOfMonth = daysLunar?.dd === 1;
  const showMonth = isFirstDayOfMonth ? `/${daysLunar?.mm}` : '';

  return (
    <div
      className={cx(handleStyle().cell, styleToday, styles.cell, activeCls, {
        [styles.active]:
          type !== defineDays.CELL_WEEK && chooseItem === daysSolar?.ddmm,
      })}
      onClick={() => props.onSelectDay?.({ ...props })}
    >
      <p className={cx(handleStyle().txt)}>{value}</p>
      {showLunar && type !== defineDays.CELL_WEEK && (
        <p
          className={cx(styles.txtLunar, {
            [styles.firstDayOfMonth]: isFirstDayOfMonth,
          })}
        >
          {daysLunar?.dd + showMonth}
        </p>
      )}
    </div>
  );
};

export default React.memo(CellDays);
