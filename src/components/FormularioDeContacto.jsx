import React from 'react';
import './FormularioDeContacto.css';

const FormularioDeContacto = () => {
  return (
    <section className="contact-section">
      <div className="contact-content">
        <h2>Estemos en contacto</h2>
        <p>Si tenés alguna pregunta o consulta, no dudes en escribirnos.</p>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message" rows="5" required />
          </div>
          <button type="submit" className="submit-button">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default FormularioDeContacto;
