import React, { useState } from "react";
import styles from './word.module.css';

const Word = ({ english, transcription, russian, tags, onClick }) => {

    const [selected, setSelected] = useState(false);

    const handleClick = () => {
        setSelected(!selected);
        onClick && onClick(!selected);
    };

    return (
        
            <div className={`${styles.word} ${selected ? styles.selected : ''}`}
            onClick={handleClick}>

                <p className={styles.paragraph}>{english}</p>
                <p className={styles.paragraph}>{transcription}</p>
                <p className={styles.paragraph}>{russian}</p>
                
                <button className={styles.addBtn}>Добавить</button>
                <button className={styles.editBtn}><img src="src/assets/images/edit-1.png" alt="редактировать" /></button>
                <button className={styles.deleteBtn}><img src="src/assets/images/trash.png" alt="удалить" /></button>
            </div>

    );
};

export default Word;