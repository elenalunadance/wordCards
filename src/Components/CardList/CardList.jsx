import { useState, useEffect } from 'react';
import data from '../../Services/data.json';
import Card from '../Card/Card';
import styles from './cardList.module.css';


export default function CardList () {
    const [items, setItems] = useState([]);
    useEffect(() => {
        setItems(data);
    }, []);

    return (
        <div className={styles.cardList}>
            {items.map(item => (
        <Card key={item.id} english={item.english} transcription={item.transcription} russian={item.russian} tags={item.tags}/>
    ))}
        </div>
    )
}
