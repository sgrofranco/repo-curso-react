import React from 'react'

const Contacto = () => {
    return (
        <div>
            <h1>Contacto</h1>
            <p>Si tienes alguna pregunta o consulta, no dudes en contactarnos.</p>
            <form>
                <div>
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="message">Mensaje:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Contacto
