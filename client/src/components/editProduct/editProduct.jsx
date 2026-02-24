import { useFormik } from 'formik';
import { editProduct, getProductById } from '../../services/productsService';
import { productSchema } from '../../schemas/productSchema';
import { useNavigate, useParams } from 'react-router-dom';
import { categories } from '../../data/categories';
import { useEffect, useState } from 'react';

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

    useEffect(() => {
        function loadProduct() {
            const productData = getProductById(productId);
            setProduct(productData);
        }

        loadProduct();
    }, [])

    const editProductSubmitHandler = (values) => {
        editProduct(product.id, values);

        navigate('/');
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
        <div>
            <h2>Edit Product</h2>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label><br />
                <input
                    type="text"
                    id={formNames.name}
                    name={formNames.name}
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />

                {(errors.name && touched.name) && <p>{errors.name}</p>}<br /><br />

                <label>
                    Category:
                    <select name={formNames.category} value={values.category} onChange={handleChange} onBlur={handleBlur}>
                        {categories.map((category) => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </label>

                {(errors.category && touched.category) && <p>{errors.category}</p>}<br /><br />

                <label htmlFor="description">Description:</label><br />
                <textarea
                    id={formNames.description}
                    name={formNames.description}
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                ></textarea>
                {(errors.description && touched.description) && <p>{errors.description}</p>}<br /><br />

                <label htmlFor="price">Price:</label><br />
                <input
                    type="number"
                    id="price"
                    name="price"
                    step="0.01"
                    value={values.price}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {(errors.price && touched.price) && <p>{errors.price}</p>}<br /><br />

                <label htmlFor="rating">Rating:</label><br />
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
                {(errors.rating && touched.rating) && <p>{errors.rating}</p>}<br /><br />

                <label htmlFor="imageUrl">Image URL:</label><br />
                <input
                    type="url"
                    id="imageUrl"
                    name="imageUrl"
                    value={values.imageUrl}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {(errors.imageUrl && touched.imageUrl) && <p>{errors.imageUrl}</p>}<br /><br />

                <label htmlFor="color">Color:</label><br />
                <input
                    type="text"
                    id="color"
                    name="color"
                    value={values.color}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {(errors.color && touched.color) && <p>{errors.color}</p>}<br /><br />

                <button type="submit">Edit Product</button>
            </form>
        </div>
    );
}

export default EditProduct;