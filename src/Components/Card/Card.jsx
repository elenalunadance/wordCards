import React, { useState } from "react";
import useFocus from '../../hooks/useFocus';
import styles from './card.module.css';

const Card = ({ english, transcription, russian, tags, onClick, itemsCount }) => {
    const [isPressed, setIsPressed] = useState(false);
    const buttonRef = useFocus();

    const handleClick = () => {
        setIsPressed(!isPressed);
    };


    return (
        <div className={styles.card}>
            <p className={styles.english}>{english}</p>
            <p className={styles.transcription}>{transcription}</p>
            <button 
                type="submit" 
                className={styles.translateBtn} 
                onClick={() => { handleClick(); itemsCount(); }}
                style={{ display: isPressed ? 'none' : 'block' }} 
                ref={buttonRef} 
            >
                {isPressed ? '' : 'Посмотреть перевод'}
            </button>
            <p className={styles.russian} style={{ display: isPressed ? 'block' : 'none' }}>{russian}</p>
        </div>
    );
};

export default Card;
