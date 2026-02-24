import Header from "./components/Header";
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import ProductsAdd from "./components/productsAdd/productsAdd";

function App() {
    return (
        <div className="app">

            <Header />

            <main className="main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add" element={<ProductsAdd />} />
                </Routes>
            </main>
        </div>
    )
}

export default App;
