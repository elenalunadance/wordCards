import { HomePage, ErrorPage, GamePage, TablePage } from '../Pages';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import '../App/app.module.css';


function App() {

    return (
      <div className='App'>
        <header><Header /></header>
        <main>        
        <TablePage />
        </main>
        <footer><Footer /></footer>
      </div>
    )
  }

export default App
