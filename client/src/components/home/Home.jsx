import styles from './Home.module.css';

import ProductGrid from "../productsDisplay/productsDisplay/ProductsDisplay";
import SortBar from '../sortBar/SortBar';
import Filters from "../filters/Filters";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { getProducts } from '../../services/productsService';

const Home = () => {
    const [products, setProducts] = useState([])
    const [sortingOption, setSortingOption] = useState("az");
    const [filters, setFilters] = useState({
        categories: [],
        colors: []
    });

    useEffect(() => {
        function loadProducts() {
            const products = getProducts(filters, sortingOption);
            setProducts(products);
        }

        loadProducts();
    }, [filters, sortingOption])

    function sortingOptionSetter(option) {
        setSortingOption(option);
    }

    return (
        <>
            <section className={styles["category-header"]}>
                <h1>Add a product</h1>
                <p>
                    Do you have a product that you want to sell? Add it to our marketplace and reach a wide audience of potential buyers.
                </p>

                <Link to="/add" className={styles["add-product-btn"]}>
                    Add Product
                </Link>
            </section>

            <div className={styles["content-layout"]}>

                <aside className={styles["filters"]}>
                    <Filters filters={filters} setFilters={setFilters} />
                </aside>

                <section className={styles["products-section"]}>

                    <SortBar productsCount={products.length} sortingOptionSetter={sortingOptionSetter} />

                    <ProductGrid products={products} filters={filters} sortingOption={sortingOption} />

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

export default Home;
