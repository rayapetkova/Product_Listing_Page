import styles from './DeleteProduct.module.css';
import { deleteProduct, getProductById } from '../../services/productsService';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ProductCard from '../productsDisplay/productCard/ProductCard';
import { useEffect, useState } from 'react';

const formNames = {
    name: 'name',
    category: 'category',
    description: 'description',
    price: 'price',
    rating: 'rating',
    imageUrl: 'imageUrl',
    color: 'color'
}

const DeleteProduct = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        function loadProduct() {
            const productData = getProductById(productId);
            setProduct(productData);
        }

        loadProduct();
    }, [])

    const deleteProductSubmitHandler = () => {
        deleteProduct(productId);

        navigate('/');
    }

    return (
        <div className={styles["delete-wrapper"]}>
            <div className={styles["delete-card"]}>
                <h2>Remove Product</h2>

                <p className={styles["warning-text"]}>
                    Are you sure you want to permanently remove this product?
                    This action cannot be undone.
                </p>

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
                            to={`/${product.id}`}
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