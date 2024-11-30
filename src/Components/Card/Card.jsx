import React, { useState } from "react";
import styles from './card.module.css';

const Card = ({ english, transcription, russian, tags, onClick }) => {
    const [isPressed, setIsPressed] = useState(false);

    const handleClick = () => {
        setIsPressed(!isPressed);
    };

    return (
        <div className={styles.card}>
            <p className={styles.english}>{english}</p>
            <p className={styles.transcription}>{transcription}</p>
            <button className={styles.addBtn} onClick={handleClick} 
            style={{ display: isPressed ? 'none' : 'block' }}>
                {isPressed ? '' : 'Посмотреть перевод'}
            </button>
            <p className={styles.russian} style={{ display: isPressed ? 'block' : 'none' }}>{russian}</p>
        </div>
    );
};

export default Card;
