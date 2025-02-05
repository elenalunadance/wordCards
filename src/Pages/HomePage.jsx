import Word from '../Components/Word/Word';
import { useState, useEffect, useContext } from 'react';
import styles from './homePage.module.css';
import { WordsStoreContext } from '../store/WordsStore.js';
import { observer } from 'mobx-react-lite';

const HomePage = observer(() => {
    const { updateWord, addWord, deleteWord, fetchWords} = useContext(WordsStoreContext);
    const [newWord, setNewWord] = useState({ english: '', transcription: '', russian: '' });
    const store = useContext(WordsStoreContext);

    useEffect(() => {
        fetchWords();
    }, [fetchWords]);
	
    const handleAdd = (e) => {
        e.preventDefault();
        if (newWord.english && newWord.transcription && newWord.russian) {
            store.addWord(newWord);
            setNewWord({ english: '', transcription: '', russian: '' });
        }
    };


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewWord(prevValues => ({ ...prevValues, [name]: value }));
    };

    return (
        <div className={styles.table}>
            <form className={styles.formInputs} onSubmit={handleAdd}>
                <h3 className={styles.title}>Добавить слово для изучения</h3>
                <input
                    type="text"
                    name="english"
                    value={newWord.english}
                    onChange={handleInputChange}
                    className={styles.wordInput}
                    placeholder="English"
                />
                <input
                    type="text"
                    name="transcription"
                    value={newWord.transcription}
                    onChange={handleInputChange}
                    className={styles.wordInput}
                    placeholder="Transcription"
                />
                <input
                    type="text"
                    name="russian"
                    value={newWord.russian}
                    onChange={handleInputChange}
                    className={styles.wordInput}
                    placeholder="Russian"
                />
                <button type="button" className={styles.addBtn} onClick={handleAdd}>Добавить</button>
            </form>
            <h3 className={styles.title}>Список слов</h3>
            {store.words.map(({ id, english, transcription, russian, tags, tags_json }) => (
                <Word
                    key={id}
                    id={id}
                    english={english}
                    transcription={transcription}
                    russian={russian}
                    tags={tags}
                    tags_json={tags_json}
                    deleteWord={deleteWord}
                    updateWord={updateWord}
                    addWord={addWord}
                    fetchWords={fetchWords}
                />
            ))}
        </div>
    );
});

export default HomePage;