import Header from "./components/Header";
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home";

function App() {
    return (
        <div className="app">

            <Header />

            <main className="main">
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </main>
        </div>
    )
}

export default App;
