import React from 'react'
import styles from './Aika.module.css'

export default function Aika(props) {
    return (
        <div className={ styles.container }>
            <span className={styles.brand}> { props.class } </span> { props.aika } 
        </div>
    )
}
