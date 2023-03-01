import { Moment } from 'moment';

export type CalcDays = {
  year: number;
  month: number;
  daysInMonth: any;
  dayOfMonth: Moment;
  weekDayOf: number;
  weekDayNew: number;
  dayNew: Moment;
};

export type DaySolarType = {
  day: number;
  month: number;
  year: number;
  ddmm?: string;
  ddmmyyyy?: string;
};

export type ItemDay = {
  daysLunar: LunarType;
  days: number;
  type: string;
  isToday?: boolean;
  daysSolar?: DaySolarType;
  weekday?: string;
};

export interface LunarType {
  dd: number;
  mm: any;
  yy: number;
  ix: any;
  LLLL: string;
  DM: string;
}

export type SelectDayArgs = {
  daysLunar?: LunarType;
  days?: number;
  type: string;
  isToday?: boolean;
  daysSolar?: DaySolarType;
  value: number;
};

export type WrapperProps = {
  wapperCls?: string;
  children: React.ReactNode;
};

export type KeyBtn = 'prev' | 'cur' | 'next';

export type HeaderProps = {
  date?: any;
  handleNext?: () => void;
  handlePrev?: () => void;
  handleReload?: () => void;
  currentLunar?: () => {
    dd: number;
    mm: any;
    yy: number;
    ix: any;
    LLLL: string;
  };
  cls?: {
    wapper?: string;
    viewCurDate?: string;
    groupBtn?: string;
    btn?: string;
  };
  set?: {
    [K in KeyBtn]?: {
      label?: string | boolean | null | '';
      btnClass?: string;
      txtBtnClass?: string;
      icon?: any;
      iconALign: 'right' | 'left';
    };
  };
};

export type ItemtBtn = {
  id: KeyBtn;
  onclick: (() => void) | undefined;
  label: string;
};

export interface DaysProps {
  data: ItemDay[];
  onSelectDay?: (args: SelectDayArgs) => void;
  showLunar?: boolean;
  chooseItem?: string;
  activeCls?: string;
}

export type CellDaysProps = {
  daysLunar?: LunarType;
  days?: number;
  type: string;
  isToday?: boolean;
  daysSolar?: DaySolarType;
  onSelectDay?: ((args: SelectDayArgs) => void) | undefined;
  value: number;
  showLunar?: boolean;
  chooseItem?: string;
  activeCls?: string;
};

export type WeekDaysProps = { weekdays?: string[] };

export type ListBtn = {
  readonly handlePrev?: (() => void) | undefined;
  readonly handleNext?: (() => void) | undefined;
  readonly handleReload?: (() => void) | undefined;
};
