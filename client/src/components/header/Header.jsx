import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles["header"]}>
            <div className={styles["header-content"]}>
                <Link to="/"><h2>RP Store</h2></Link>
                <nav>
                    <Link to="/categories/casual">Casual</Link>
                    <Link to="/categories/running">Running</Link>
                    <Link to="/cart">Cart</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;