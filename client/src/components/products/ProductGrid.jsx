import { useEffect, useState } from 'react';
import { getProducts } from '../../services/productsService';
import Product from './Product';

const ProductGrid = ({ filters }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        function loadProducts() {
            const products = getProducts(filters);
            setProducts(products);
        }

        loadProducts();
    }, [filters])

    return (
        <div className="product-grid">
            {products.length > 0 ? products.map(product => (
                <Product
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