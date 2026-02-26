import styles from './MessageToast.module.css';

const MessageToast = ({ message, typeMessage }) => {
    if (!message) {
        return;
    }
    
    return (
        <div className={`${styles.toast} ${styles[typeMessage]}`}>
            {message}
        </div>
    );
}

export default MessageToast;