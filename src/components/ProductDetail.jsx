import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../data';
import { CartContext } from '../CartContext';

const ProductDetail = () => {
    const { productId } = useParams();
    const product = data.find(prod => prod.id === parseInt(productId));

    const {
        allProducts,
        setAllProducts,
        countProducts,
        setCountProducts,
        total,
        setTotal
    } = useContext(CartContext);

    const onAddProduct = product => {
        if (allProducts.find(item => item.id === product.id)) {
            const products = allProducts.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            setTotal(total + product.price * product.quantity);
            setCountProducts(countProducts + product.quantity);
            return setAllProducts([...products]);
        }

        setTotal(total + product.price);
        setCountProducts(countProducts + 1);
        setAllProducts([...allProducts, { ...product, quantity: 1 }]);
    };

    if (!product) {
        return <p>Producto no encontrado</p>;
    }

    return (
        <div className='product-detail-container'>
            <div className='product-image-container'>
                <img src={product.imageUrl} alt={product.nameProduct} className='product-detail-image' />
            </div>
            <div className='product-info-container'>
                <h2>{product.nameProduct}</h2>
                <p className='product-description'>{product.description}</p>
                <p>${product.price}</p>
                <button onClick={() => onAddProduct(product)}>Añadir al carrito</button>
            </div>
        </div>
    );
}

export default ProductDetail;




