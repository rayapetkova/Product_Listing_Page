const Product = ({ product }) => {
    return (
        <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt="Product" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button>Add to Cart</button>
        </div>
    );
}

export default Product;