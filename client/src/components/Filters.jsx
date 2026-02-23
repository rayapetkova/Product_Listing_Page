import { getCategories } from "../services/productsService";

const Filters = ({ filters, setFilters }) => {
    const categories = getCategories();

    const handleCategoryChange = (e) => {
        setFilters(prev => {
            if (e.target.checked) {
                return {
                    ...prev,
                    categories: [...prev.categories, e.target.name]
                }
            } else {
                return {
                    ...prev,
                    categories: prev.categories.filter(category => category !== e.target.name)
                }
            }
        })
    };

    return (
        <div className="filters-container">
            <h3>Filters</h3>

            <div className="filter-section">
                <h4>Category</h4>

                {categories.map(category => (
                    <div key={categories.indexOf(category)}>
                        <input
                            type="checkbox"
                            name={category}
                            id={category}
                            onChange={e => handleCategoryChange(e)}
                            checked={filters.categories.includes(category)}
                        />
                        <label htmlFor={category}>{category}</label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Filters;