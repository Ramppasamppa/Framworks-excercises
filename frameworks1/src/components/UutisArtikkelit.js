import React from 'react'
import styles from './Uutiset.module.css';

export default function UutisArtikkelit(props) {
    return (

        <div className={ styles.container }>
               <div className={ styles.img }> { props.img } </div>
               <span className={styles.header}> { props.newsclass }</span> { props.headline } 
               <div className={styles.date}>{props.time}</div>
               
            
        </div>
    )
}
