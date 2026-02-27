import styles from '../productsAdd/ProductsAdd.module.css';
import { useFormik } from 'formik';
import { editProduct, getProductById } from '../../services/productsService';
import { productSchema } from '../../schemas/productSchema';
import { useNavigate, useParams } from 'react-router-dom';
import { categories } from '../../data/categories';
import { useEffect, useState } from 'react';
import MessageToast from '../messageToast/MessageToast';

const formNames = {
    id: 'id',
    name: 'name',
    category: 'category',
    description: 'description',
    price: 'price',
    rating: 'rating',
    imageUrl: 'imageUrl',
    color: 'color'
}

const EditProduct = () => {
    const navigate = useNavigate();
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [message, setMessage] = useState({
        text: "",
        type: ""
    })

    useEffect(() => {
        function loadProduct() {
            const productData = getProductById(productId);
            setProduct(productData);
        }

        loadProduct();
    }, [])

    const editProductSubmitHandler = (values) => {
        const [messageText, messageType] = editProduct(product.id, values);

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
            navigate(`/${product.id}`);
        }
    }

    const { values, handleChange, handleSubmit, handleBlur, errors, touched } = useFormik({
        initialValues: {
            [formNames.id]: product?.id || '',
            [formNames.name]: product?.name || '',
            [formNames.category]: product?.category || '',
            [formNames.description]: product?.description || '',
            [formNames.price]: product?.price || 0,
            [formNames.rating]: product?.rating || 0,
            [formNames.imageUrl]: product?.imageUrl || '',
            [formNames.color]: product?.color || ''
        },
        enableReinitialize: true,
        validationSchema: productSchema,
        onSubmit: () => editProductSubmitHandler(values)
    })

    return (
        <div className={styles["form-wrapper"]}>
            <div className={styles["form-card"]}>
                <h2>Edit Product</h2>

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

                        {(errors.name && touched.name) && <p className={styles["error-text"]}>{errors.name}</p>}
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

                        {(errors.category && touched.category) && <p className={styles["error-text"]}>{errors.category}</p>}
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

                        {(errors.description && touched.description) && <p className={styles["error-text"]}>{errors.description}</p>}
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

                        {(errors.price && touched.price) && <p className={styles["error-text"]}>{errors.price}</p>}
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

                        {(errors.rating && touched.rating) && <p className={styles["error-text"]}>{errors.rating}</p>}
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

                        {(errors.imageUrl && touched.imageUrl) && <p className={styles["error-text"]}>{errors.imageUrl}</p>}
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

                        {(errors.color && touched.color) && <p className={styles["error-text"]}>{errors.color}</p>}
                    </div>

                    <MessageToast message={message.text} typeMessage={message.type} />

                    <button type="submit" className={styles["submit-btn"]}>
                        Save Changes
                    </button>

                </form>
            </div>
        </div>
    );
}

export default EditProduct;