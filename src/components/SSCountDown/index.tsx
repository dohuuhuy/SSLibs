import cx from 'classnames'
import React from 'react'
import useSSCountDown from './HOCs'
import { renderTime } from './proccess/func'
import { SSCountDownProps } from './proccess/interface'
import styles from './styles.module.scss'

const SSCountDownUI = ({ cls, setting, timeInput }: SSCountDownProps) => {
  const { timeOutput } = useSSCountDown({ timeInput })

  return (
    <div className={cx(styles.wapper, cls?.wapperCls)}>
      {renderTime(timeOutput).map((v, i = 0) => {
        const statuss = setting?.[v.key]?.status || true
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
  )
}

export default SSCountDownUI
