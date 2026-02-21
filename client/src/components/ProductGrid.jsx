import product from "../assets/product.png"

function ProductGrid() {
    return (
        <div className="product-grid">
            <div className="product-card">
                <img src={product} alt="Product" />
                <h3>Product Name</h3>
                <p>Short description</p>
                <p>$120</p>
                <button>Add to Cart</button>
            </div>

            <div className="product-card">
                <img src={product} alt="Product" />
                <h3>Product Name</h3>
                <p>Short description</p>
                <p>$120</p>
                <button>Add to Cart</button>
            </div>

            <div className="product-card">
                <img src={product} alt="Product" />
                <h3>Product Name</h3>
                <p>Short description</p>
                <p>$120</p>
                <button>Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductGrid;