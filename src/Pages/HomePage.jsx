import Word from '../Components/Word/Word';
import { useContext } from 'react';
import styles from './homePage.module.css';
import { WordsContext } from '../Components/context/WordsContext.js';


export default function HomePage() {
    const { isLoading, words, deleteWord } = useContext(WordsContext);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div className={styles.table}>
            {words.map(({ id, english, transcription, russian, tags,tags_json }) => (
                <Word
                    key={id}
                    id={id}
                    english={english}
                    transcription={transcription}
                    russian={russian}
                    tags={tags}
                    tags_json={tags_json}
                    deleteWord={deleteWord}
                />
            ))}
        </div>
    );
}
