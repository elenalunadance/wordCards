import { HomePage, GamePage } from '../Pages';
import Header from '../Components/Header/Header';
import '../App/app.module.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Missing from '../Components/Missing/Missing';


function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="*" element={<Missing />} />
        </Routes>       
      </div>
    </Router>
  );
}

export default App
