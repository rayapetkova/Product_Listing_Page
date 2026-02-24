import * as yup from 'yup';

export const productSchema = yup.object().shape({
    name: yup.string().min(2, 'Name must be at least 2 characters.').max(60, 'Name must be at most 50 characters.').required('Name is required.'),
    category: yup.string().min(2, 'Category must be at least 2 characters.').max(60, 'Category must be at most 50 characters.').required('Category is required.'),
    description: yup.string().min(2, 'Description must be at least 2 characters.').max(900, 'Description must be at most 500 characters.').required('Description is required.'),
    price: yup.number().min(0, 'Price must be a positive number.').required('Price is required.'),
    rating: yup.number().min(0, 'Rating must be at least 0.').max(5, 'Rating must be at most 5.').required('Rating is required.'),
    imageUrl: yup.string().url('Image URL must be a valid URL.').required('Image URL is required.'),
    color: yup.string().min(2, 'Color must be at least 2 characters.').max(30, 'Color must be at most 30 characters.').required('Color is required.')
});