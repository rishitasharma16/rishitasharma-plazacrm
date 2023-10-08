import React from 'react'
import styles from '../styles/wrapper.module.css'

function Wrapper({children}) {
  return (
    <div className={styles.wrapper}>{children}</div>
  )
}

export default Wrapper