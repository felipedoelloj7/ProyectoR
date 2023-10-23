import React, { createContext, useState, useContext } from 'react';

// Crear contexto
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [allProducts, setAllProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [countProducts, setCountProducts] = useState(0);

    return (
        <CartContext.Provider value={{ allProducts, setAllProducts, total, setTotal, countProducts, setCountProducts }}>
            {children}
        </CartContext.Provider>
    );
};

// Hook personalizado para acceder fácilmente al contexto
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart debe ser utilizado dentro de un CartProvider');
    }
    return context;
};

