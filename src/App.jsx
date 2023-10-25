import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { obtenerProductos } from './firebase/firebaseQueries';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Navbar from './components/Navbar.jsx';
import Contacto from './components/Contacto';
import { CartProvider } from './CartContext';
import Checkout from './components/Checkout';


function App() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const productosList = await obtenerProductos();
            setProductos(productosList);
        }

        fetchData();
    }, []);

    return (
        <Router>
            <CartProvider>
                <Navbar />
                <Routes>
                    <Route path="/" element={<><Header /><ProductList productos={productos} /></>} />
                    <Route path="/product/:productId" element={<ProductDetail />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
            </CartProvider>
        </Router>
    );
}

export default App;


















