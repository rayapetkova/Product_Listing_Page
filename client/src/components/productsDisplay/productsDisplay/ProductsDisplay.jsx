import styles from './ProductsDisplay.module.css';
import ProductCard from '../productCard/ProductCard';

const ProductGrid = ({ products }) => {
    return (
        <div className={styles["products-grid"]}>
            {products.length > 0 ? products.map(product => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            )) : (
                <p>No products yet.</p>
            )}
        </div>
    );
}

export default ProductGrid;