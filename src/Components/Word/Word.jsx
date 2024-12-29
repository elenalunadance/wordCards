import { useState } from "react";
import styles from './word.module.css';

const Word = ({ english, transcription, russian, onClick }) => {
    const [isSelected, setIsSelected] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [formValues, setFormValues] = useState({
        english: english || '',
        transcription: transcription || '',
        russian: russian || ''
    });
    const [formErrors, setFormErrors] = useState({});

    const toggleSelected = () => {
        const newSelectedState = !isSelected;
        setIsSelected(newSelectedState);
        onClick && onClick(newSelectedState);
    };

    const toggleEditing = () => {
        setIsEditing(!isEditing);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues(prevValues => ({ ...prevValues, [name]: value }));

        if (value.trim() !== '') {
            setFormErrors(prevErrors => ({ ...prevErrors, [name]: false }));
        }
    };

    const validateFields = () => {
        const errors = {};
        for (const key in formValues) {
            if (formValues[key].trim() === '') {
                errors[key] = true;
            }
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateFields()) {
            alert('Пожалуйста, заполните все поля формы.');
            return;
        }
        setIsEditing(false);
    };

    return (
        <div className={styles.wordWrapper}>
            {isEditing ? (
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="english"
                        value={formValues.english}
                        onChange={handleInputChange}
                        className={`${styles.wordInput} ${formErrors.english ? styles.error : ''}`}
                        placeholder="English"
                    />
                    <input
                        type="text"
                        name="transcription"
                        value={formValues.transcription}
                        onChange={handleInputChange}
                        className={`${styles.wordInput} ${formErrors.transcription ? styles.error : ''}`}
                        placeholder="Transcription"
                    />
                    <input
                        type="text"
                        name="russian"
                        value={formValues.russian}
                        onChange={handleInputChange}
                        className={`${styles.wordInput} ${formErrors.russian ? styles.error : ''}`}
                        placeholder="Russian"
                    />
                    <button type="submit" className={styles.addBtn} disabled={Object.keys(formErrors).length > 0}>
                        Сохранить
                    </button>
                </form>
            ) : (
                <div className={`${styles.word} ${isSelected ? styles.selected : ''}`} onClick={toggleSelected}>
                    <p className={styles.paragraph}>{english}</p>
                    <p className={styles.paragraph}>{transcription}</p>
                    <p className={styles.paragraph}>{russian}</p>
                    <button type="button" className={styles.editBtn} onClick={toggleEditing}>
                        <img src="src/assets/images/edit-1.png" alt="Edit" />
                    </button>
                    <button className={styles.deleteBtn}>
                        <img src="src/assets/images/trash.png" alt="Delete" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Word;
