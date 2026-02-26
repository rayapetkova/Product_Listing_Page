import styles from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import ProductsAdd from "./components/productsAdd/ProductsAdd";
import EditProduct from "./components/editProduct/editProduct";
import DeleteProduct from "./components/deleteProduct/DeleteProduct";
import Header from './components/header/Header';
import ProductDetails from './components/productsDisplay/productDetails/ProductDetails';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import CategoryProductsDisplay from './components/categoryProductsDisplay/CategoryProductsDisplay';
import NotFound404 from './components/notFound404/NotFound404';

function App() {
    return (
        <div className="app">

            <Header />

            <main className={styles["main"]}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products/add" element={<ProductsAdd />} />
                    <Route path="/products/:productId" element={<ProductDetails />} />
                    <Route path="/products/:productId/edit" element={<EditProduct />} />
                    <Route path="/products/:productId/delete" element={<DeleteProduct />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/categories/:categoryName" element={<CategoryProductsDisplay />} />
                    <Route path='*' element={<NotFound404 />} />
                </Routes>
            </main>
        </div>
    )
}

export default App;
