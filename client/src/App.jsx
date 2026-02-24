import Header from "./components/Header";
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import ProductsAdd from "./components/productsAdd/productsAdd";
import EditProduct from "./components/editProduct/editProduct";
import ProductDetails from "./components/productsDisplay/ProductDetails";
import DeleteProduct from "./components/deleteProduct/deleteProduct";

function App() {
    return (
        <div className="app">

            <Header />

            <main className="main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add" element={<ProductsAdd />} />
                    <Route path="/:productId" element={<ProductDetails />} />
                    <Route path="/:productId/edit" element={<EditProduct />} />
                    <Route path="/:productId/delete" element={<DeleteProduct />} />
                </Routes>
            </main>
        </div>
    )
}

export default App;
