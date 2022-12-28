import cx from 'classnames'
import { get } from 'lodash'
import React from 'react'
import useSSCountDown from './HOCs'
import { renderTime } from './proccess/func'
import { SSCountDownProps } from './proccess/interface'
import styles from './styles.module.scss'

const SSCountDownUI: React.FC<SSCountDownProps> = ({
  cls,
  setting,
  timeInput
}) => {
  const { timeOutput } = useSSCountDown({ timeInput })

  return (
    <React.Fragment>
      <div className={cx(styles.wapper, cls?.wapperCls)}>
        {renderTime(timeOutput).map((v, i = 0) => {
          const statuss = get(setting?.[v.key], 'status', true)
          return (
            statuss && (
              <div className={cx(styles.item, cls?.itemCls)} key={i}>
                <span className={cx(styles.num, cls?.numCls)}>{v?.num}</span>
                <span className={cx(styles.txt, cls?.txtCls)}>{v?.txt}</span>
              </div>
            )
          )
        })}
      </div>
    </React.Fragment>
  )
}

export default SSCountDownUI
