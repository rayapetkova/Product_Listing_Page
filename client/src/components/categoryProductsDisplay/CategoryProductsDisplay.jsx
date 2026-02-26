import styles from './CategoryProductsDisplay.module.css';

import ProductGrid from "../productsDisplay/productsDisplay/ProductsDisplay";
import SortBar from '../sortBar/SortBar';

import { useEffect, useState } from "react";
import { getProducts } from '../../services/productsService';
import { useParams } from 'react-router-dom';

const CategoryProductsDisplay = () => {
    const [categoryProducts, setCategoryProducts] = useState([])
    const [sortingOption, setSortingOption] = useState("az");
    const { categoryName } = useParams();

    useEffect(() => {
        function loadProducts() {
            const products = getProducts({categories: [categoryName]}, sortingOption);
            setCategoryProducts(products);
        }

        loadProducts();
    }, [sortingOption, categoryName])

    function sortingOptionSetter(option) {
        setSortingOption(option);
    }

    return (
        <>
            <h1>{categoryName}</h1>
            
            <div className={styles["content-layout"]}>
                <section className={styles["products-section"]}>

                    <SortBar productsCount={categoryProducts.length} sortingOptionSetter={sortingOptionSetter} />

                    <ProductGrid products={categoryProducts} sortingOption={sortingOption} />

                    <div className={styles["load-more-container"]}>
                        <button className={styles["load-more-btn"]}>
                            Load More
                        </button>
                    </div>

                </section>
            </div>
        </>
    )
}

export default CategoryProductsDisplay;
