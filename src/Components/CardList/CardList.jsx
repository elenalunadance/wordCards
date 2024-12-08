import { useState, useEffect } from 'react';
import data from '../../Services/data.json';
import Card from '../Card/Card';
import styles from './cardList.module.css';


export default function CardList({ selectedIndex }) {
    const [items, setItems] = useState([]);

    const initialIndex = selectedIndex !== undefined ? selectedIndex : 0;

    useEffect(() => {
        setItems(data);
    }, []);

    return (
        <div className={styles.cardList}>
            <button>---</button>
            {items.length > 0 && (
                <Card 
                    key={items[initialIndex].id} 
                    english={items[initialIndex].english} 
                    transcription={items[initialIndex].transcription} 
                    russian={items[initialIndex].russian} 
                    tags={items[initialIndex].tags}
                />
            )}
            <button>---</button>
        </div>
    );
}