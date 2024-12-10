import { useState, useEffect } from 'react';
import data from '../Services/data.json';
import Card from '../Components/Card/Card';
import styles from './gamePage.module.css';

export default function GamePage({ initialIndex }) {
    const [items, setItems] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setItems(data);
        if (data.length > 0) {

            setCurrentIndex(initialIndex % data.length);
        }
    }, [initialIndex]);

    const handleClickBack = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + items.length) % items.length);
    };

    const handleClickNext = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % items.length);
    };

    return (
        <div className={styles.gamePage}>
            <button className={styles.backBtn} onClick={handleClickBack}>
                <img src="src/assets/images/left_arrow.png" alt="назад" />
            </button>
            {items.length > 0 && currentIndex >= 0 && currentIndex < items.length && (
                <Card
                    key={items[currentIndex].id}
                    english={items[currentIndex].english}
                    transcription={items[currentIndex].transcription}
                    russian={items[currentIndex].russian}
                    tags={items[currentIndex].tags}
                />
            )}
            <button className={styles.nextBtn} onClick={handleClickNext}>
                <img src="src/assets/images/right_arrow.png" alt="вперед" />
            </button>
        </div>
    );
}
