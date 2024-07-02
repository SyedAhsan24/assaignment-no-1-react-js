import React from "react";
import styles from "./Card.module.css"

const Card =(props)=>{
    console.log(props)
    return(
        <div className={styles.cards}>
            <img className={styles.cardsimg} src="https://img.lovepik.com/element/45001/3052.png_860.png"/>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default Card 