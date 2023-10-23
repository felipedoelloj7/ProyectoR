import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget.jsx';
import { CartContext } from '../CartContext';

const Navbar = () => {
    const { allProducts, setAllProducts, total, countProducts, setCountProducts, setTotal } = useContext(CartContext);

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <h1>Tienda de Mousepads</h1>
            </div>

            <div className="navbar-right">
                <Link to="/">Inicio</Link>
                <Link to="/contacto">Contacto</Link>
                <CartWidget />
            </div>
        </nav>
    );
}

export default Navbar;




