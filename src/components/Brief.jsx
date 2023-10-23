import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

const Brief = () => {
  const { allProducts, total } = useContext(CartContext);

  return (
    <div className="brief-container">
      <h3>Detalle de Compra</h3>
      <ul className="brief-list">
        {allProducts.map(product => (
          <li key={product.id}>
            {product.nameProduct} - ${product.price} x {product.quantity}
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
    </div>
  );
}

export default Brief;
