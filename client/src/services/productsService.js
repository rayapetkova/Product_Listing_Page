import { categories } from "../data/categories";
import products from '../data/products';

export function getProducts(filters = {}) {
    let filteredProducts = localStorage.getItem("products");

    if (!filteredProducts) {
        filteredProducts = products;
        localStorage.setItem("products", JSON.stringify(products));
    } else {
        filteredProducts = JSON.parse(filteredProducts);
    }

    if (filters.categories && filters.categories.length > 0) {
        filteredProducts = filteredProducts.filter((product) => filters.categories.includes(product.category.toLowerCase()));
    }

    return filteredProducts;
}

export function getCategories() {
    return categories;
}

export function getProductById(productId) {
    const productsData = getProducts();
    return productsData.find(p => p.id == productId);
}

export function addProduct(data) {
    const productsData = getProducts();
    const lastProduct = productsData[productsData.length - 1];
    const currentProductId = lastProduct ? lastProduct.id + 1 : 1;

    data.id = currentProductId;
    productsData.push(data);
    localStorage.setItem("products", JSON.stringify(productsData));

    return data;
}

export function editProduct(productId, data) {
    const productsData = getProducts();
    const productIdx = productsData.findIndex(x => x.id == productId);

    productsData[productIdx] = data;
    localStorage.setItem("products", JSON.stringify(productsData));

    return productsData[productIdx];
}

export function deleteProduct(productId) {
    const productsData = getProducts();
    const productIdx = productsData.findIndex(x => x.id == productId);
    productsData.splice(productIdx, 1)

    localStorage.setItem("products", JSON.stringify(productsData));
    return productsData;
}
