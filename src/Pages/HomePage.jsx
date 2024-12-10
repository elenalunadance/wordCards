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
                {items.map(item => (
                <Word key={item.id} english={item.english} transcription={item.transcription} russian={item.russian} tags={item.tags}/>
                ))}
        </div>
    );
};