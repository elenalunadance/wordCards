const API_URL = 'https://itgirlschool.justmakeit.ru/api/words';

class WordsApiService {
  async fetchWords() {
    const response = await fetch(API_URL);
    const words = await response.json();

    return words;
  }

  async add({ english, transcription, russian, tags, id, tags_json }) {
    await fetch(`${API_URL}/words/add`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ english, transcription, russian, tags, id, tags_json }),
    });
  }
  

  async update({ english, transcription, russian, tags, id, tags_json }) {
    await fetch(`${API_URL}/${id}/update`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ english, transcription, russian, tags, id, tags_json }),
    });
  }

  async delete(id) {
    await fetch(`${API_URL}/${id}/delete`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    });
  }
}

export const wordsApiService = new WordsApiService();
