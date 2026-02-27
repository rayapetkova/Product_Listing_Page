import styles from './ProductDetails.module.css';
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../../../services/productsService";
import { useEffect, useState } from "react";

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        function loadProduct() {
            const productData = getProductById(productId);
            setProduct(productData);
        }

        loadProduct();
    }, [])

    return (
        <div key={product.id} className={styles["product-details"]}>
            <div className={styles["left"]}>
                <div className={styles["image-container"]}>
                    <img src={product.imageUrl} alt="Product" />
                </div>
                <h3>{product.name}</h3>
            </div>

            <div className={styles["right"]}>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <p>Color: {product.color}</p>
                <p>Rating: {product.rating}</p>
                <p>Category: {product.category}</p>

                <div className={styles["product-actions"]}>
                    <Link to={`/products/${product.id}/edit`}>Edit</Link>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;