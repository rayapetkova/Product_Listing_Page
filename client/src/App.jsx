import Header from "./components/Header";
import ProductGrid from "./components/ProductGrid";
import styles from "./App.module.css";
import SortBar from "./components/SortBar";
import Filters from "./components/Filters";

function App() {
    return (
        <div className="app">

            <Header />

            <main className="main">
                <section className={styles["category-header"]}>
                    <h1>Bags</h1>
                    <p>
                        Discover our premium collection of stylish and functional bags
                        designed for every occasion.
                    </p>
                </section>

                <div className={styles["content-layout"]}>

                    <aside className={styles["filters"]}>
                        <Filters />
                    </aside>

                    <section className={styles["products-section"]}>

                        <SortBar />

                        <ProductGrid />

                        <div className={styles["load-more-container"]}>
                            <button className={styles["load-more-btn"]}>
                                Load More
                            </button>
                        </div>

                    </section>
                </div>
            </main>
        </div>
    )
}

export default App
