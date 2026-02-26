import { Link } from "react-router-dom";
import styles from "./NotFound404.module.css";

const NotFound404 = () => {
    return (
        <div className={styles.container}>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>
                The page you are looking for does not exist.
            </p>

            <Link to="/" className={styles.homeBtn}>
                Go Back Home
            </Link>
        </div>
    );
};

export default NotFound404;