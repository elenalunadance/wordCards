import { Link } from "react-router";
import styles from './navBar.module.css';

function NavBar( { title = "English words"} ) {
    return (
        <nav className={styles.navBar}>
            <ul className={styles.list}>
                <li>
                    <Link to="/" className={styles.link}><img src="src/assets/images/logo.png" alt="лого" /></Link>
                </li>
                <li className={styles.link}>
                    <Link to="/" className={styles.link}>Home</Link>
                </li>
                <li>
                    <Link to="/game" className={styles.link}>Game</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;