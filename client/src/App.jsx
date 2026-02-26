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

function App() {
    return (
        <div className="app">

            <Header />

            <main className={styles["main"]}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add" element={<ProductsAdd />} />
                    <Route path="/:productId" element={<ProductDetails />} />
                    <Route path="/:productId/edit" element={<EditProduct />} />
                    <Route path="/:productId/delete" element={<DeleteProduct />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/categories/:categoryName" element={<CategoryProductsDisplay />} />
                </Routes>
            </main>
        </div>
    )
}

export default App;
