import React, { useState } from "react";
import styles from './word.module.css';

const Word = ({ english, transcription, russian, tags, onClick }) => {

    const [selected, setSelected] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

    const handleClick = () => {
        setSelected(!selected);
        onClick && onClick(!selected);
    };

    const handleClickEdit = () => {
        setIsPressed(!isPressed);
    };

    return (
        <div>

        {isPressed && ( 
            <form className={styles.form}>
                <input className={styles.wordInput} placeholder="слово"/>
                <input className={styles.wordInput} placeholder="транскрипция"/>
                <input className={styles.wordInput} placeholder="перевод"/>
                <button type="submit" className={styles.addBtn}>Добавить</button>
            </form>
        )}
        
            <div className={`${styles.word} ${selected ? styles.selected : ''} ${isPressed ? styles.hidden : ''}`}
            onClick={handleClick}>

                <p className={styles.paragraph}>{english}</p>
                <p className={styles.paragraph}>{transcription}</p>
                <p className={styles.paragraph}>{russian}</p>
                
                
                <button type="submit" className={styles.editBtn} onClick={handleClickEdit}>
                    <img src="src/assets/images/edit-1.png" alt="редактировать" />
                </button>
                <button className={styles.deleteBtn}><img src="src/assets/images/trash.png" alt="удалить" /></button>
            </div>
        </div>
    );
};

export default Word;