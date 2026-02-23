import styles from '../App.module.css';

import ProductGrid from "./products/ProductGrid";
import SortBar from "./SortBar";
import Filters from "./Filters";

import { useState, useEffect } from "react";

const Home = () => {
    const [filters, setFilters] = useState({
        categories: []
    });

    return (
        <>
            <section className={styles["category-header"]}>
                <h1>Bags</h1>
                <p>
                    Discover our premium collection of stylish and functional bags
                    designed for every occasion.
                </p>
            </section>

            <div className={styles["content-layout"]}>

                <aside className={styles["filters"]}>
                    <Filters filters={filters} setFilters={setFilters} />
                </aside>

                <section className={styles["products-section"]}>

                    <SortBar />

                    <ProductGrid filters={filters} />

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
