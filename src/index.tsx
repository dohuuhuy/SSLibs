import * as React from 'react'
import styles from './styles.module.css'

interface Props {
  text: string
}

export const Demo = ({ text }: Props) => {
  return <div className={styles.test}>name: {text}</div>
}
