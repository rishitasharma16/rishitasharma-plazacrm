import React from 'react'
import styles from '../styles/card.module.css'

function Card({image, title, text, onClick}) {
  return (
    <div className={styles.card}>
         <img src={image} alt={title} />
         <h5>{title}</h5>
         <p>{text}</p>
         <a type='button' onClick={onClick}>Read More</a>
    </div>
  )
}

export default Card