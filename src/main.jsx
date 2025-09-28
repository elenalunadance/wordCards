import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App/App';
import { Provider } from 'mobx-react';
import { wordsStore } from './store/WordsStore';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider wordsStore={wordsStore}>
      <App />
    </Provider>
  </StrictMode>
);
