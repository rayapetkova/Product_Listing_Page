import { categories, products } from "../data/products";

export function getProducts(filters) {
    let filteredProducts = products;

    if (filters.categories && filters.categories.length > 0) {
        filteredProducts = filteredProducts.filter(product => filters.categories.includes(product.category));
    }

    return filteredProducts;
}

export function getCategories() {
    return categories;
}

export function addProduct(data) {
    products.push(data);

    return data;
}

export function editProduct(productId, data) {
    const productIdx = products.findIndex(x => x.id == productId);
    products[productIdx] = data;

    return products[productIdx];
}

export function deleteProduct(productId) {
    const productIdx = products.findIndex(x => x.id == productId);
    products.splice(productIdx, 1)

    return products;
}
