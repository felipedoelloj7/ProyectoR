import React, { useState, useContext } from 'react';
import { CartContext } from '../CartContext';
import Brief from './Brief';

const Checkout = () => {
  const { allProducts, setAllProducts, setTotal, setCountProducts } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // aca puedo hacer algo con la información del formulario, como enviarla a un servidor.
    // x ahora, solo mostraremos una alerta y vaciaremos el carrito.
    alert("Gracias por tu compra, " + formData.name + "!");
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };

  return (
    <div className="contact-container">
      <h2>Finalizar compra</h2>

      {/* Aquí añadimos el Brief */}
      <Brief />

      <form className="contact-form" onSubmit={handleSubmit}>
        <div>
          <label>Nombre completo:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Dirección:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div>
          <label>Teléfono:</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <button type="submit">Finalizar compra</button>
      </form>
    </div>
  );
}

export default Checkout;

