export function getCartProducts() {
    let cartProducts = localStorage.getItem("cartProducts");

    if (!cartProducts) {
        localStorage.setItem("cartProducts", JSON.stringify([]));
        cartProducts = [];
    } else {
        cartProducts = JSON.parse(cartProducts);
    }

    return cartProducts;
}

export function getCartProduct(productId) {
    const cartProducts = getCartProducts();

    return cartProducts.find(p => p.id === productId);
}

export function addCartProduct(product) {
    let cartProducts = getCartProducts();
    const existingProduct = getCartProduct(product.id);

    if (existingProduct) {
        return ["Product already in cart", "error"];
    }

    cartProducts.push(product);
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));

    return ["Product added successfully to cart", "success"];
}

export function removeCartProduct(productId) {
    let cartProducts = getCartProducts();
    const existingProduct = getCartProduct(productId);

    if (!existingProduct) {
        return ["Product not found in cart", "error"];
    }

    cartProducts = cartProducts.filter(p => p.id !== productId);
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));

    return ["Product removed successfully from cart", "success"];
}
