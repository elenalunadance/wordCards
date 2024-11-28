import Word from '../Components/Word/Word';
import { useState, useEffect } from 'react';
import data from '../Services/data.json';
import styles from './tablePage.module.css';

export default function TablePage() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        setItems(data);
    }, []);

    return <div className={styles.table}>
        <p className={styles.paragraph}>Слово</p>
        <p className={styles.paragraph}>Транскрипция</p>
        <p className={styles.paragraph}>Перевод</p>
        <p className={styles.paragraph}>Категория</p>

            {items.map(item => (
        <Word key={item.id} english={item.english} transcription={item.transcription} russian={item.russian} tags={item.tags}/>
    ))}
    </div>
}