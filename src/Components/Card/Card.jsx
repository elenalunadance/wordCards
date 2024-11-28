import React from "react";
import styles from './card.module.css';

const Card = ({ english, transcription, russian, tags }) => {
    return (
        <div className={styles.card}>
            <p className={styles.paragraph}>{english}</p>
            <p className={styles.paragraph}>{transcription}</p>
            <p className={styles.paragraph}>{russian}</p>
            <p className={styles.paragraph}>{tags}</p>

       </div>
    );
};

export default Card;
