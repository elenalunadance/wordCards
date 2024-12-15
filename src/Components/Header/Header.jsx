import NavBar from '../NavBar/NavBar';
import styles from './header.module.css';

export default function Header() {
    return (
    <header className={styles.title}>
        English words
        <NavBar />
    </header>
    );
}