import { HomePage, ErrorPage, GamePage, TablePage } from '../Pages';
import CardList from '../Components/CardList/CardList';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import '../App/app.module.css';


function App() {
  return (
    <div className="app">
      <header>
        <Header />
      </header>
      <main>
        <TablePage />
        <CardList />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App
