import { Link } from "react-router-dom";

const Product = ({ product }) => {
    return (
        <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt="Product" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>

            <Link to={`/${product.id}`}>More Details</Link>
            <Link to={`/${product.id}/edit`}>Edit</Link>
            <Link to={`/${product.id}/delete`}>Delete</Link>
            <button>Add to Cart</button>
        </div>
    );
}

export default Product;