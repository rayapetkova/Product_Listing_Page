import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p className={styles.copyright}>
                    © RP Store. All rights reserved.
                </p>

                <nav className={styles.links}>
                    <Link to="/">Home</Link>
                    <Link to="/cart">Cart</Link>
                </nav>
            </div>
        </footer>
    )
}

export default Footer;