import cx from 'classnames'
import { get } from 'lodash'
import React from 'react'
import useSSCountDown from '../hook'
import { SSCountDownProps } from '../interface'
import { renderTime } from '../proccess/func'
import styles from './styles.module.scss'

const SSCountDownUI: React.FC<SSCountDownProps> = ({
  cls,
  setting,
  timeInput
}) => {
  const { timeOutput } = useSSCountDown({ timeInput })

  return (
    <div className={cx(styles.wrapper, cls?.wrapperCls)}>
        {renderTime(timeOutput).map((v, i = 0) => {
          const statuss = get(setting?.[v.key], 'status', true)
          return (
            statuss && (
              <div
                className={cx(styles.item, cls?.itemCls, {
                  [styles.shadow]: get(setting, 'shadow', true)
                })}
                key={i}
              >
                <span className={cx(styles.num, cls?.numCls)}>{v?.num}</span>
                <span className={cx(styles.txt, cls?.txtCls)}>{v?.txt}</span>
              </div>
            )
          )
        })}
    </div>
  )
}

export default SSCountDownUI
