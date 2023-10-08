import React from 'react'
import styles from '../../styles/button.module.css'

function Button1({title,onClick, textColor, background}) {
  return (
    <button onClick={onClick} style={{color:textColor, background:background}} className={styles.button1}>
        {title}
    </button>
  )
}

export default Button1