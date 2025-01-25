import { HomePage, GamePage } from '../Pages';
import Header from '../Components/Header/Header';
import '../App/app.module.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useWords } from '../hooks/useWords';
import { WordsContext } from '../Components/context/WordsContext.js';
import Missing from '../Components/Missing/Missing';


function App() {
  const value = useWords();

  return (
    <Router>
      <WordsContext.Provider value={value}>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/game" element={<GamePage />} />
            <Route path="*" element={<Missing />} />
          </Routes>       
        </div>
      </WordsContext.Provider>
    </Router>   
  );
}

export default App
