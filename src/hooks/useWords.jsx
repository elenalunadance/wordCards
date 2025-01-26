import { useEffect, useState } from "react";
import { wordsApiService } from "../api/WordsApiServise.js";

export function useWords() {
  const [isLoading, setLoading] = useState(true);
  const [isPending, setPending] = useState(false);
  const [words, setWords] = useState([]);

  const editWord = async (data) => {
    if (!data || !data.id) {
      throw new Error("Data or ID is not provided");
    }
  
    setPending(true); 
  
    try {
      await wordsApiService.editWord(data);
      const updatedWords = words.map((word) => 
        word.id === data.id ? { ...word, ...data } : word
      );
  
      setWords(updatedWords);
    } catch (e) {
      console.error(e);
    } finally {
      setPending(false);
    }
  };

  const addWord = async (data) => {
      await wordsApiService.create(data);

      const newWords = words.concat(data);
  
      setWords(newWords);
    };

  const deleteWord = async (id) => {
    if (!id) {
      console.error("ID is not provided");
      return;
    }

    setPending(true);

    try {
      await wordsApiService.delete(id);
      setWords((prevWords) => prevWords.filter(({ id: currentId }) => currentId !== id));
    } catch (error) {
      console.error("Error deleting word:", error);
    } finally {
      setPending(false);
    }
  };

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const words = await wordsApiService.fetchWords();
        setWords(words);
      } catch (error) {
        console.error("Error fetching words:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWords();
  }, []);

  return { isLoading, isPending, words, editWord, addWord, deleteWord };
}
