import { makeAutoObservable } from 'mobx';
import { createContext } from 'react';
import { wordsApiService } from '../api/WordsApiService';

class WordsStore {
    words = [];

    constructor() {
        makeAutoObservable(this);
        this.fetchWords();
    }

    async fetchWords() {
        try {
            const response = await wordsApiService.fetchWords();
            this.setWords(response);
        } catch (error) {
            console.error("Ошибка при загрузке слов:", error);
        }
    }

    setWords(words) {
        this.words = words;
    }

    addWord(word) {
        this.words.push(word);
        this.saveChanges();
    }

    deleteWord(id) {
        this.words = this.words.filter(word => word !== id);
        this.saveChanges();
    }

    updateWord(oldWord, newWord) {
        const index = this.words.indexOf(oldWord);
        if (index > -1) {
            this.words[index] = newWord;
            this.saveChanges();
        }
    }

    async saveChanges() {
        try {
            await wordsApiService.post(this.words);
        } catch (error) {
            console.error("Ошибка при сохранении изменений:", error);
        }
    }
}

export const wordsStore = new WordsStore();
export const WordsStoreContext = createContext(wordsStore);