import React, { useState } from 'react';

const Contacto = () => {
    const [formData, setFormData] = useState({
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // En un escenario real, aquí enviarías los datos del formulario (formData) a un servidor
        alert(`Mensaje enviado! Email: ${formData.email}, Mensaje: ${formData.message}`);
        setFormData({ email: '', message: '' });
    };

    return (
        <div className="contact-container">
            <h2>Contacto</h2>
            <div className="contact-details">
                <p>Dirección: Avenida UwU 123</p>
                <p>Teléfono: +123456789</p>
            </div>
    
            <form className="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div>
                    <label>Mensaje:</label>
                    <textarea 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
    
}

export default Contacto;
