import styles from './Filters.module.css';
import { getCategories, getColors } from "../../services/productsService";

const Filters = ({ filters, setFilters }) => {
    const categories = getCategories();
    const colors = getColors();

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

    const handleColorChange = (e) => {
        setFilters(prev => {
            if (e.target.checked) {
                return {
                    ...prev,
                    colors: [...prev.colors, e.target.name]
                }
            }
            else {
                return {
                    ...prev,
                    colors: prev.colors.filter(color => color !== e.target.name)
                }
            }
        })
    }

    return (
        <div className={styles["filters-container"]}>
            <h3>Filters</h3>

            <div className={styles["filter-section"]}>
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

            <div className={styles["filter-section"]}>
                <h4>Color</h4>

                {colors.map(color => (
                    <div key={colors.indexOf(color)}>
                        <input
                            type="checkbox"
                            name={color}
                            id={color}
                            onChange={e => handleColorChange(e)}
                            checked={filters.colors.includes(color)}
                        />
                        <label htmlFor={color}>{color}</label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Filters;