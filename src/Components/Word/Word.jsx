import React from "react";
import styles from './word.module.css';

const Word = ({ english, transcription, russian, tags }) => {
    return (
        <div className={styles.word}>
            <p className={styles.english}>{english}</p>
            <p className={styles.transcription}>{transcription}</p>
            <p className={styles.russian}>{russian}</p>
            <p className={styles.tags}>{tags}</p>
            <button className={styles.addBtn}>Добавить</button>
       </div>
    );
};

export default Word;