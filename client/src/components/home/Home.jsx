import styles from './Home.module.css';

import ProductGrid from "../productsDisplay/productsDisplay/ProductsDisplay";
import SortBar from '../sortBar/SortBar';
import Filters from "../filters/Filters";
import { Link } from "react-router-dom";

import { useState } from "react";

const Home = () => {
    const [sortingOption, setSortingOption] = useState("az");
    const [filters, setFilters] = useState({
        categories: []
    });

    function sortingOptionSetter(option) {
        setSortingOption(option);
    }

    return (
        <>
            <section className={styles["category-header"]}>
                <h1>Bags</h1>
                <p>
                    Discover our premium collection of stylish and functional bags
                    designed for every occasion.
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

                    <SortBar sortingOptionSetter={sortingOptionSetter} />

                    <ProductGrid filters={filters} sortingOption={sortingOption} />

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
