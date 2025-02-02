import { useState, useContext } from "react";
import styles from './word.module.css';
import { observer } from 'mobx-react-lite';
import { WordsStoreContext } from '../../store/WordsStore.js';

const Word = observer(({ id,english, transcription, russian, onClick }) => {
    const [selected, setSelected] = useState(false);
    const [editing, setEditing] = useState(false);
    const [values, setValues] = useState({ english, transcription, russian });
    const store = useContext(WordsStoreContext);

    const toggleSelected = () => {
        const newSelected = !selected;
        setSelected(newSelected);
        if (onClick) onClick(newSelected);
    };

    const toggleEditing = () => {
        setEditing(!editing);
        if (!values.english || !values.transcription || !values.russian) {
            setValues({ english, transcription, russian });
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues(prevValues => ({ ...prevValues, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!values.english || !values.transcription || !values.russian || 
            values.english.trim().length < 2 || 
            values.transcription.trim().length < 2 || 
            values.russian.trim().length < 2) {
            alert('Пожалуйста, заполните все поля формы.');
            return;
        }
        store.updateWord(values);
        setEditing(false);
    };

    return (
        <div className={styles.word}>
            {editing ? (
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="english"
                        value={values.english}
                        onChange={handleInputChange}
                        className={`${styles.wordInput} ${!values.english ? styles.error : ''}`}
                        placeholder="English"
                    />
                    <input
                        type="text"
                        name="transcription"
                        value={values.transcription}
                        onChange={handleInputChange}
                        className={`${styles.wordInput} ${!values.transcription ? styles.error : ''}`}
                        placeholder="Transcription"
                    />
                    <input
                        type="text"
                        name="russian"
                        value={values.russian}
                        onChange={handleInputChange}
                        className={`${styles.wordInput} ${!values.russian ? styles.error : ''}`}
                        placeholder="Russian"
                    />
                    <button type="submit" className={styles.saveBtn} disabled={!values.english || !values.transcription || !values.russian}>
                        Сохранить
                    </button>
                </form>
            ) : (
                <div className={`${styles.word} ${selected ? styles.selected : ''}`} onClick={toggleSelected}>
                    <p className={styles.paragraph}>{english}</p>
                    <p className={styles.paragraph}>{transcription}</p>
                    <p className={styles.paragraph}>{russian}</p>
                    <button type="button" className={styles.editBtn} onClick={toggleEditing}>
                        <img className={styles.edit} src="src/assets/images/edit-1.png" alt="Edit" />
                    </button>
                    <button className={styles.deleteBtn} onClick={() => store.deleteWord(id)}>
                        <img className={styles.trash} src="src/assets/images/trash.png" alt="Delete" />
                    </button>
                </div>
            )}
        </div>
    );
});

export default Word;
