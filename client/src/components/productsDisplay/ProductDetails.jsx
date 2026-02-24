import { Link, useParams } from "react-router-dom";
import { getProductById } from "../../services/productsService";
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
        <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt="Product" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <p>Color: {product.color}</p>
            <p>Rating: {product.rating}</p>
            <p>Category: {product.category}</p>

            <Link to={`/${product.id}/edit`}>Edit</Link>
            <button>Add to Cart</button>
        </div>
    );
}

export default ProductDetails;