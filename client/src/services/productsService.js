import { categories } from "../data/categories";
import { colors } from "../data/colors";
import products from '../data/products';

export function getProducts(filters = {}, sortingOption = "az") {
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

    if (filters.colors && filters.colors.length > 0) {
        filteredProducts = filteredProducts.filter((product) => filters.colors.includes(product.color.toLowerCase()));
    }

    switch (sortingOption) {
        case "az":
            filteredProducts.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
            break;
        case "za":
            filteredProducts.sort((a, b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase()));
            break;
        case "lowHigh":
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case "highLow":
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
    }

    return filteredProducts;
}

export function getCategories() {
    return categories;
}

export function getColors() {
    return colors;
}

export function getLastProductId() {
    const productsData = getProducts();
    const sortedProducts = productsData.sort((a, b) => b.id - a.id);

    return sortedProducts[0].id;
}

export function getProductById(productId) {
    const productsData = getProducts();
    return productsData.find(p => p.id == productId);
}

export function addProduct(data) {
    const productsData = getProducts();

    data.id = getLastProductId() + 1;
    productsData.push(data);

    localStorage.setItem("products", JSON.stringify(productsData));
    return data;
}

export function editProduct(productId, data) {
    const productsData = getProducts();
    const productIdx = productsData.findIndex(x => x.id == Number(productId));

    productsData[productIdx] = data;
    localStorage.setItem("products", JSON.stringify(productsData));

    return productsData[productIdx];
}

export function deleteProduct(productId) {
    const productsData = getProducts();
    const productIdx = productsData.findIndex(x => x.id == productId);
    productsData.splice(productIdx, 1)

    for (let i=productIdx; i < productsData.length; i++) {
        productsData[i].id = productsData[i].id - 1;
    }

    localStorage.setItem("products", JSON.stringify(productsData));
    return productsData;
}
