import styles from './Cart.module.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../productsDisplay/productCard/ProductCard';
import { getCartProducts } from '../../services/cartService';

const Cart = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        function loadCartProducts() {
            const cartProducts = getCartProducts();
            setProducts(cartProducts);
        }

        loadCartProducts();
    }, []);

    return (
        <div className={styles["cart-products-grid"]}>
            {products.length > 0 ? (
                products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))
            ) : (
                <div className={styles["empty-cart"]}>
                    <p>No products in your cart yet.</p>
                    <Link to="/">Continue Shopping</Link>
                </div>
            )}
        </div>
    );
};

export default Cart;