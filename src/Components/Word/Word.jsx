import { useState, useContext } from 'react';
import { WordsContext } from '../../Components/context/WordsContext.js';
import styles from './word.module.css';


const Word = ({ id, english, transcription, russian, onClick, isPending, editWord, deleteWord }) => {
    const [selected, setSelected] = useState(false);
    const [editing, setEditing] = useState(false);
    const [values, setValues] = useState({ english, transcription, russian });
    const { words } = useContext(WordsContext);


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
        if (!values.english || !values.transcription || !values.russian || values.english.trim().length < 2 || values.transcription.trim().length < 2 || values.russian.trim().length < 2) {
            alert('Пожалуйста, заполните все поля формы.');
            return;
        }
        console.log(values);
        setEditing(false);
    };

    const handleEdit = (id) => {
        if (!id) {
            console.error('Invalid ID');
            return;
        }
        const updatedData = {
            id,
            english: "измененное английское слово",
            transcription: "измененная транскрипция",
            russian: "измененное русское слово",
        };
        editWord(updatedData);
    };

    return (
        <div className={styles.word}>
            {editing ? (
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="english"
                        value={values.english || ''}
                        onChange={handleInputChange}
                        className={`${styles.wordInput} ${!values.english ? styles.error : ''}`}
                        placeholder="English"
                    />
                    <input
                        type="text"
                        name="transcription"
                        value={values.transcription || ''}
                        onChange={handleInputChange}
                        className={`${styles.wordInput} ${!values.transcription ? styles.error : ''}`}
                        placeholder="Transcription"
                    />
                    <input
                        type="text"
                        name="russian"
                        value={values.russian || ''}
                        onChange={handleInputChange}
                        className={`${styles.wordInput} ${!values.russian ? styles.error : ''}`}
                        placeholder="Russian"
                    />
                    <button type="button" className={styles.saveBtn} disabled={!values.english || !values.transcription || !values.russian} onClick={handleSubmit}>
                        Сохранить
                    </button>
                </form>
            ) : (
                <div className={`${styles.word} ${selected ? styles.selected : ''}`} onClick={toggleSelected}>
                    <p className={styles.paragraph}>{english || ''}</p>
                    <p className={styles.paragraph}>{transcription || ''}</p>
                    <p className={styles.paragraph}>{russian || ''}</p>
                    <button type="button" className={styles.editBtn} onClick={() => { toggleEditing(); handleEdit(); }}>
                        <img className={styles.edit} src="src/assets/images/edit-1.png" />
                    </button>
                    <button className={styles.deleteBtn} type='button' onClick={() => deleteWord(id)} disabled={isPending}>
                        <img className={styles.trash} src="src/assets/images/trash.png" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Word;
