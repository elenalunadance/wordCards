import React, { useState, useContext } from "react";
import useFocus from '../../hooks/useFocus';
import styles from './card.module.css';
import { observer } from 'mobx-react-lite';
import { WordsStoreContext } from '../../store/WordsStore';

const Card = observer(({ english, transcription, russian, tags, onClick, itemsCount }) => {
    const [isPressed, setIsPressed] = useState(false);
    const buttonRef = useFocus();
    const store = useContext(WordsStoreContext);

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
                onClick={() => { handleClick(); store.itemsCount(); }}
                style={{ display: isPressed ? 'none' : 'block' }} 
                ref={buttonRef} 
            >
                {isPressed ? '' : 'Посмотреть перевод'}
            </button>
            <p className={styles.russian} style={{ display: isPressed ? 'block' : 'none' }}>{russian}</p>
        </div>
    );
});

export default Card;
