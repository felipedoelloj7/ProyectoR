import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../CartContext';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';

const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    
    const {
        allProducts,
        setAllProducts,
        countProducts,
        setCountProducts,
        total,
        setTotal
    } = useContext(CartContext);

    const firestoreIds = {
        "1": "71aIQLZTc7ygv78ngwu91",
        "2": "3MOxX4YRPrV6quoX2y9A",
        "3": "IozBgG7tcEKZzh3MCera",
        "4": "UOGVO8LuKvwO6LijYjXk",
        "5": "o7iTdwzDPzPKROkgpXds",
        "6": "of5mnNkWTLYZ9XRnAqAh"
    };

    useEffect(() => {
        const fetchData = async () => {
            const db = getFirestore();
            const firestoreId = firestoreIds[productId]; 
            const productRef = doc(db, "items", firestoreId);
            const productDoc = await getDoc(productRef);

            if (productDoc.exists) {
                setProduct({ ...productDoc.data(), id: parseInt(productId) });
            } else {
                console.log("Producto no encontrado!");
            }
        };

        fetchData();
    }, [productId]);

    const onAddProduct = async product => {
        if (product.stock <= 0) {
            console.log("Producto agotado");
            return;
        }

        const db = getFirestore();
        const firestoreId = firestoreIds[productId];
        const productRef = doc(db, "items", firestoreId);
        
        await updateDoc(productRef, {
            stock: product.stock - 1
        });

        if (allProducts.find(item => item.id === product.id)) {
            const products = allProducts.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            setTotal(total + product.price);
            setCountProducts(countProducts + 1);
            return setAllProducts([...products]);
        }

        setTotal(total + product.price);
        setCountProducts(countProducts + 1);
        setAllProducts([...allProducts, { ...product, quantity: 1 }]);
    };

    if (!product) {
        return <p>Cargando producto...</p>;
    }

    return (
        <div className='product-detail-container'>
            <div className='product-image-container'>
                <img src={product.image} alt={product.title} className='product-detail-image' />
            </div>
            <div className='product-info-container'>
                <h2>{product.title}</h2>
                <p className='product-description'>{product.description}</p>
                <p>${product.price}</p>
                <button onClick={() => onAddProduct(product)}>Añadir al carrito</button>
            </div>
        </div>
    );
}

export default ProductDetail;











