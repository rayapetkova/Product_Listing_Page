function Filters() {
    return (
        <div className="filters-container">
            <h3>Filters</h3>

            <div className="filter-section">
                <h4>Color</h4>

                <div>
                    <input type="checkbox" id="black" />
                    <label htmlFor="black">Black</label>
                </div>

                <div>
                    <input type="checkbox" id="brown" />
                    <label htmlFor="brown">Brown</label>
                </div>

                <div>
                    <input type="checkbox" id="white" />
                    <label htmlFor="white">White</label>
                </div>
            </div>

            <div className="filter-section">
                <h4>Price</h4>

                <div className="price-inputs">
                    <input type="number" placeholder="Min" />
                    <input type="number" placeholder="Max" />
                </div>
            </div>
        </div>
    );
}

export default Filters;