import Word from '../Components/Word/Word';
import { useState, useEffect } from 'react';
import data from '../Services/data.json';
import styles from './homePage.module.css';

export default function HomePage() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        setItems(data);
    }, []);



    return (
        <div className={styles.table}>
            <form className={styles.form}>
                <input className={styles.wordInput} placeholder="слово"/>
                <input className={styles.wordInput} placeholder="транскрипция"/>
                <input className={styles.wordInput} placeholder="перевод"/>
                
                <button className={styles.addBtn}>Добавить</button>
                <button className={styles.editBtn}><img src="src/assets/images/edit-1.png" alt="редактировать" /></button>
                <button className={styles.deleteBtn}><img src="src/assets/images/trash.png" alt="удалить" /></button>
            </form>

            {items.map(item => (
        <Word key={item.id} english={item.english} transcription={item.transcription} russian={item.russian} tags={item.tags}/>
        ))}
        </div>
    );
};