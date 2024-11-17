import { useState, useEffect } from 'react';
import { HomePage, ErrorPage, GamePage, TablePage } from './Pages';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import './styles/index.css';


function App() {

    return (
      <div className='App'>
        <header><Header /></header>
        <main>        
        <HomePage />
        <ErrorPage />
        <GamePage />
        <TablePage />
        </main>
        <footer><Footer /></footer>

      </div>
    )
  
  }

export default App
