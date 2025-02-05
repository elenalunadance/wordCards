import { v4 as uuidv4 } from 'uuid';
import { makeAutoObservable} from 'mobx';
import { createContext } from 'react';
import { wordsApiService } from '../api/WordsApiService';

class WordsStore {
    words = [];

    constructor() {
        makeAutoObservable(this);
        this.fetchWords();
    }

    fetchWords = async () => {
        try {
            const response = await wordsApiService.fetchWords();
            this.setWords(response);
        } catch (error) {
            console.error("Ошибка при загрузке слов:", error);
        }
    };

    setWords(words) {
        this.words = words;
    };

    addWord = async (data) => {
        const newWord = { ...data, id: uuidv4() };
        try {
            await wordsApiService.addWord(newWord);
            this.setWords([...this.words, newWord]);
        } catch (error) {
            console.error("Ошибка при добавлении слова:", error);
        }
    };
    

    deleteWord = async (id) => {
        try {
            await wordsApiService.deleteWord(id);
            const newWords = this.words.filter(({id: currentId}) => currentId !== id);
            this.setWords(newWords);
        } catch (error) {
            console.error("Ошибка при удалении слова:", error);
        }
    };

    updateWord = async (oldWord, newWordData) => {
        const newWord = { ...oldWord, ...newWordData };
        try {
            console.log("Отправка данных на сервер:", { 
                id: oldWord.id,
                ...newWordData 
            });
            const response = await wordsApiService.updateWord({ 
                id: oldWord.id,
                ...newWordData 
            });
            console.log("Ответ от сервера:", response);
            
            this.setWords(this.words.map((word) => (word.id === oldWord.id ? newWord : word)));
        } catch (error) {
            console.error("Ошибка при обновлении слова:", error);
        }
    };
};

export const wordsStore = new WordsStore();
export const WordsStoreContext = createContext(wordsStore);