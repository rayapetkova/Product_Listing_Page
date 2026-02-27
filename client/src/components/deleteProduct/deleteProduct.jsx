import styles from './DeleteProduct.module.css';
import { deleteProduct, getProductById } from '../../services/productsService';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ProductCard from '../productsDisplay/productCard/ProductCard';
import { useEffect, useState } from 'react';
import MessageToast from '../messageToast/MessageToast';

const DeleteProduct = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [message, setMessage] = useState({
        text: "",
        type: ""
    });
    const navigate = useNavigate();

    useEffect(() => {
        function loadProduct() {
            const productData = getProductById(productId);
            setProduct(productData);
        }

        loadProduct();
    }, [])

    const deleteProductSubmitHandler = () => {
        const [messageText, messageType] = deleteProduct(productId);

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

        if (messageType === "success") {
            navigate("/");
        }
    }

    return (
        <div className={styles["delete-wrapper"]}>
            <div className={styles["delete-card"]}>
                <h2>Remove Product</h2>

                <p className={styles["warning-text"]}>
                    Are you sure you want to permanently remove this product?
                    This action cannot be undone.
                </p>

                <MessageToast message={message.text} typeMessage={message.type} />

                <ProductCard product={product} />

                <form onSubmit={deleteProductSubmitHandler}>
                    <div className={styles["delete-actions"]}>
                        <button
                            type="submit"
                            className={styles["delete-btn"]}
                        >
                            Yes, Delete
                        </button>

                        <Link
                            to={`/products/${product.id}`}
                            className={styles["cancel-link"]}
                        >
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default DeleteProduct;