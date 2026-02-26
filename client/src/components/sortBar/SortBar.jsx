import styles from './SortBar.module.css';

const SortBar = ({ visibleProductsCount, productsCount, sortingOptionSetter }) => {
    const sortingOptionChangeHandler = (e) => {
        sortingOptionSetter(e.target.value);
    }

    return (
        <div className={styles["sort-bar"]}>
            <div className={styles["product-counter"]}>
                {visibleProductsCount} out of {productsCount} products displayed
            </div>

            <div className={styles["sort-dropdown"]}>
                <label htmlFor="sort">Sort by: </label>
                <select id="sort" onChange={sortingOptionChangeHandler}>
                    <option value="az">Alphabetical (A–Z)</option>
                    <option value="za">Alphabetical (Z–A)</option>
                    <option value="lowHigh">Price (Low to High)</option>
                    <option value="highLow">Price (High to Low)</option>
                </select>
            </div>
        </div>
    );
}

export default SortBar;