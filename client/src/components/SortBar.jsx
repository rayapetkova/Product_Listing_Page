function SortBar() {
    return (
        <div className="sort-bar">

            <div className="product-counter">
                3 out of 24 products displayed
            </div>

            <div className="sort-dropdown">
                <label htmlFor="sort">Sort by: </label>
                <select id="sort">
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