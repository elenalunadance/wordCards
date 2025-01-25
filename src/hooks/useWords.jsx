import { useEffect, useState } from "react";
import { wordsApiService } from "../api/WordsApiServise.js";

export function useWords() {
  const [isLoading, setLoading] = useState(true);
  const [isPending, setPending] = useState(false);
  const [words, setWords] = useState([]);

  const editWord = async (data) => {
    if (!data || !data.id) {
      console.error("Data or ID is not provided");
      return;
    }

    try {
      if (data.id === "new") {
        await wordsApiService.add(data);
        setWords((prevWords) => [data, ...prevWords]);
      } else {
        await wordsApiService.update(data);
        setWords((prevWords) =>
          prevWords.map((word) =>
            word.id === data.id ? { ...word, ...data } : word
          )
        );
      }
    } catch (error) {
      console.error("Error editing word:", error);
    }
  };

  const addWord = async (data) => {
    if (!data || !data.id) {
      console.error("Data or ID is not provided");
      return;
    }

    try {
      await wordsApiService.add(data);
      setWords((prevWords) => [data, ...prevWords]);
    } catch (error) {
      console.error("Error adding word:", error);
    }
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
