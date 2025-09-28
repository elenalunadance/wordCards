import { useState, useEffect, useContext } from 'react';
import Card from '../Components/Card/Card';
import styles from './gamePage.module.css';
import { WordsStoreContext } from '../store/WordsStore';
import { observer } from 'mobx-react-lite';
import arrowLeft from '../assets/images/left_arrow.png';
import arrowRight from '../assets/images/right_arrow.png';

const GamePage = observer(({ initialIndex = 0 }) => {
  const { words } = useContext(WordsStoreContext);
  const [wordIndex, setWordIndex] = useState(initialIndex);
  const [wordsLearned, setWordsLearned] = useState(0);
  const store = useContext(WordsStoreContext);

  useEffect(() => {
    if (initialIndex >= 0 && initialIndex < words.length) {
      setWordIndex(initialIndex);
    }
  }, [initialIndex, words]);

  const handleGoBack = () => {
    if (words.length > 0) {
      setWordIndex((wordIndex - 1 + words.length) % words.length);
    }
  };

  const handleGoForward = () => {
    if (words.length > 0) {
      setWordIndex((wordIndex + 1) % words.length);
    }
  };

  const handleLearned = () => {
    if (wordsLearned < words.length) {
      setWordsLearned(wordsLearned + 1);
    }
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={handleGoBack}>
        <img className={styles.arrow} src={arrowLeft} alt='назад' />
      </button>

      {words.length > 0 && (
        <Card
          key={words[wordIndex].id}
          english={words[wordIndex].english}
          transcription={words[wordIndex].transcription}
          russian={words[wordIndex].russian}
          tags={words[wordIndex].tags}
          handleLearned={handleLearned}
        />
      )}

      <button className={styles.button} onClick={handleGoForward}>
        <img className={styles.arrow} src={arrowRight} alt='вперед' />
      </button>
      <p className={styles.wordsLearned}>
        Изучено слов: {wordsLearned}/{words.length}
      </p>
    </div>
  );
});

export default GamePage;
