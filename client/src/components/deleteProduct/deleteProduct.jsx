import { useFormik } from 'formik';
import { addProduct, deleteProduct, getProductById } from '../../services/productsService';
import { productSchema } from '../../schemas/productSchema';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { categories } from '../../data/categories';
import Product from '../productsDisplay/Product';
import { useEffect, useState } from 'react';

const formNames = {
    name: 'name',
    category: 'category',
    description: 'description',
    price: 'price',
    rating: 'rating',
    imageUrl: 'imageUrl',
    color: 'color'
}

const DeleteProduct = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        function loadProduct() {
            const productData = getProductById(productId);
            setProduct(productData);
        }

        loadProduct();
    }, [])

    const deleteProductSubmitHandler = () => {
        deleteProduct(productId);

        navigate('/');
    }

    return (
        <div>
            <h2>Remove Product</h2>

            <Product product={product} />

            <form onSubmit={deleteProductSubmitHandler}>
                <button type="submit">Yes, I'm sure</button>
                <Link to={`/${product.id}`}>Back to Product</Link>
            </form>
        </div>
    );
}

export default DeleteProduct;