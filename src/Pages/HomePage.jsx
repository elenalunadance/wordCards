import Word from '../Components/Word/Word';
import { useState, useEffect, useContext } from 'react';
import styles from './homePage.module.css';
import { WordsContext } from '../Components/context/WordsContext.js';

export default function HomePage() {
    const { deleteWord, editWord, addWord, data } = useContext(WordsContext);
    const [newWord, setNewWord] = useState({ english: '', transcription: '', russian: '' });
    const [words, setWords] = useState([]);

    useEffect(() => {
        console.log(data);
        if (data) {
            setWords(data);
        }
    }, [data]);

    const handleAdd = (e) => {
        e.preventDefault();
        if (!newWord.english || !newWord.transcription || !newWord.russian) {
            alert('Пожалуйста, заполните все поля формы.');
            return;
        }
        try {
            const createdWord = {
                id: `word-${Date.now()}`,
                english: newWord.english,
                transcription: newWord.transcription,
                russian: newWord.russian,
                tags: [],
                tags_json: [],
            };
            addWord(createdWord);
            setNewWord({ english: '', transcription: '', russian: '' });
        } catch (error) {
            console.error("Error adding word:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewWord(prevValues => ({ ...prevValues, [name]: value }));
    };

    return (
        <div className={styles.table}>
            <form className={styles.formInputs} onSubmit={handleAdd}>
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
                <button type="submit" className={styles.addBtn} onClick={handleAdd}>Добавить</button>
            </form>
            {words.map(({ id, english, transcription, russian, tags, tags_json }) => (
                <Word
                    key={id}
                    id={id}
                    english={english}
                    transcription={transcription}
                    russian={russian}
                    tags={tags}
                    tags_json={tags_json}
                    deleteWord={deleteWord}
                    editWord={editWord}
                    addWord={addWord}
                />
            ))}
        </div>
    );
}


