import { useEffect, useState } from 'react';
import { addCartProduct, getCartProduct, removeCartProduct } from '../../../services/cartService';
import styles from './ProductCard.module.css';
import { Link } from "react-router-dom";
import MessageToast from '../../messageToast/MessageToast';

const ProductCard = ({ product }) => {
    const [message, setMessage] = useState({
        text: "",
        type: ""
    });
    const [existingProductInCart, setExistingProductInCart] = useState(false);
    const [starsRating, setStarsRating] = useState(0);

    useEffect(() => {
        const productInCart = getCartProduct(product.id);
        setExistingProductInCart(productInCart);
        setStarsRating(Math.round(product.rating));
    }, [])

    const addToCartHandler = () => {
        const [messageText, messageType] = addCartProduct(product);
        setExistingProductInCart(true);

        setMessage({
            text: messageText,
            type: messageType
        });

        setTimeout(() => {
            setMessage({
                text: "",
                type: ""
            });
        }, 4000);
    }

    const removeFromCartHandler = () => {
        const [messageText, messageType] = removeCartProduct(product.id);
        setExistingProductInCart(false);

        setMessage({
            text: messageText,
            type: messageType
        });

        setTimeout(() => {
            setMessage({
                text: "",
                type: ""
            });
        }, 4000);
    }

    return (
        <div key={product.id} className={styles["product-card"]}>
            <img src={product.imageUrl} alt="Product" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>

            <div className={styles["rating-container"]}>
                {[...Array(starsRating)].map((_, i) => (
                    <span
                        key={i}
                        className={styles["star-filled"]}
                    >
                        ★
                    </span>
                ))}

                {[...Array(5 - starsRating)].map((_, i) => (
                    <span
                        key={i}
                        className={styles["star-empty"]}
                    >
                        ★
                    </span>
                ))}
            </div>

            <div className={styles["product-card-buttons"]}>
                <Link to={`/${product.id}`}>More Details</Link>
                <Link to={`/${product.id}/edit`}>Edit</Link>
                <Link to={`/${product.id}/delete`}>Delete</Link>
            </div>

            {existingProductInCart ? (
                <button className={styles["remove-from-cart-button"]} onClick={removeFromCartHandler}>Remove from Cart</button>
            ) : (
                <button onClick={addToCartHandler}>Add to Cart</button>
            )}

            <MessageToast message={message.text} typeMessage={message.type} />
        </div>
    );
}

export default ProductCard;