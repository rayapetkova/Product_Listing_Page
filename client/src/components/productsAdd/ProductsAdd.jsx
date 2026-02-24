const ProductsAdd = () => {
    return (
        <div>
      <h2>Add New Product</h2>

      <form>
        <label htmlFor="name">Name:</label><br />
        <input type="text" id="name" name="name" /><br /><br />

        <label htmlFor="category">Category:</label><br />
        <input type="text" id="category" name="category" /><br /><br />

        <label htmlFor="description">Description:</label><br />
        <textarea id="description" name="description"></textarea><br /><br />

        <label htmlFor="price">Price:</label><br />
        <input type="number" id="price" name="price" step="0.01" /><br /><br />

        <label htmlFor="rating">Rating:</label><br />
        <input
          type="number"
          id="rating"
          name="rating"
          step="0.1"
          min="0"
          max="5"
        /><br /><br />

        <label htmlFor="imageUrl">Image URL:</label><br />
        <input type="text" id="imageUrl" name="imageUrl" /><br /><br />

        <label htmlFor="color">Color:</label><br />
        <input type="text" id="color" name="color" /><br /><br />

        <button type="submit">Add Product</button>
      </form>
    </div>
    );
}

export default ProductsAdd;