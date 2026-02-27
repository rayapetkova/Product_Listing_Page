import styles from './ProductsAdd.module.css';
import { useFormik } from 'formik';
import { addProduct } from '../../services/productsService';
import { productSchema } from '../../schemas/productSchema';
import { useNavigate } from 'react-router-dom';
import { categories } from '../../data/categories';
import MessageToast from '../messageToast/MessageToast';
import { useState } from 'react';

const formNames = {
    name: 'name',
    category: 'category',
    description: 'description',
    price: 'price',
    rating: 'rating',
    imageUrl: 'imageUrl',
    color: 'color'
}

const ProductsAdd = () => {
    const [message, setMessage] = useState({
        text: "",
        type: ""
    })
    const navigate = useNavigate();

    const addProductSubmitHandler = (values) => {
        const [messageText, messageType] = addProduct(values);

        setMessage({
            text: messageText,
            type: messageType
        });

        setTimeout(() => {
            setMessage({
                text: "",
                type: ""
            });
        }, 4000);

        if (messageType === "success") {
            navigate("/");
        }
    }

    const { values, handleChange, handleSubmit, handleBlur, errors, touched } = useFormik({
        initialValues: {
            [formNames.name]: '',
            [formNames.category]: '',
            [formNames.description]: '',
            [formNames.price]: '',
            [formNames.rating]: '',
            [formNames.imageUrl]: '',
            [formNames.color]: ''
        },
        validationSchema: productSchema,
        onSubmit: () => addProductSubmitHandler(values)
    })

    return (
        <div className={styles["form-wrapper"]}>
            <div className={styles["form-card"]}>
                <h2>Add New Product</h2>

                <form onSubmit={handleSubmit}>

                    <div className={styles["form-group"]}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {(errors.name && touched.name) &&
                            <p className={styles["error-text"]}>{errors.name}</p>}
                    </div>

                    <div className={styles["form-group"]}>
                        <label htmlFor="category">Category</label>
                        <select
                            id="category"
                            name="category"
                            value={values.category}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        >
                            <option value="">Select category</option>
                            {categories.map(category => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                        {(errors.category && touched.category) &&
                            <p className={styles["error-text"]}>{errors.category}</p>}
                    </div>

                    <div className={styles["form-group"]}>
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            value={values.description}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {(errors.description && touched.description) &&
                            <p className={styles["error-text"]}>{errors.description}</p>}
                    </div>

                    <div className={styles["form-group"]}>
                        <label htmlFor="price">Price</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            step="0.01"
                            value={values.price}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {(errors.price && touched.price) &&
                            <p className={styles["error-text"]}>{errors.price}</p>}
                    </div>

                    <div className={styles["form-group"]}>
                        <label htmlFor="rating">Rating</label>
                        <input
                            type="number"
                            id="rating"
                            name="rating"
                            step="0.1"
                            min="0"
                            max="5"
                            value={values.rating}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {(errors.rating && touched.rating) &&
                            <p className={styles["error-text"]}>{errors.rating}</p>}
                    </div>

                    <div className={styles["form-group"]}>
                        <label htmlFor="imageUrl">Image URL</label>
                        <input
                            type="url"
                            id="imageUrl"
                            name="imageUrl"
                            value={values.imageUrl}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {(errors.imageUrl && touched.imageUrl) &&
                            <p className={styles["error-text"]}>{errors.imageUrl}</p>}
                    </div>

                    <div className={styles["form-group"]}>
                        <label htmlFor="color">Color</label>
                        <input
                            type="text"
                            id="color"
                            name="color"
                            value={values.color}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {(errors.color && touched.color) &&
                            <p className={styles["error-text"]}>{errors.color}</p>}
                    </div>

                    <MessageToast message={message.text} typeMessage={message.type} />

                    <button type="submit" className={styles["submit-btn"]}>
                        Add Product
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ProductsAdd;