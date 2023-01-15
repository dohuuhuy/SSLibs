export interface SSCountDownProps {
  cls?: {
    wrapperCls?: any;
    itemCls?: any;
    numCls?: any;
    txtCls?: any;
  };
  setting?: {
    [K in keyTxt]?: {
      status: boolean;
    };
  } & {
    shadow?: boolean;
  };
  timeInput?: any;
}

export interface InitTime {
  days: number | string;
  hours: number | string;
  minutes: number | string;
  seconds: number | string;
}

export type keyTxt = 'days' | 'hours' | 'minutes' | 'seconds';

export type RenderTime = {
  key: keyTxt;
  num: string | number;
  txt: string;
};
