import React, { useState } from 'react';
import axios from 'axios';

import '../estilos/components/pages/contactoPage.css'

const ContactoPage = (props) => {

    // FORMULARIO INICIAL
    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] =  useState(initialForm);

    const handleChange = e => {
        const {name, value} = e.target;
        console.log(formData)
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }))
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
          
        const response = await axios.post('http://localhost:3500/api/contacto', formData);

        // setSending(false)
        setMsg(response.data.message);
        if(response.data.error === false){
            setFormData(initialForm)
        }
    }

    return (
        <main className="holder">
        <div className="columna left">
            <h2>Contacto Rápido</h2>
            <form className="formulario" onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text"  name="nombre" value={formData.nombre} onChange={handleChange}/>
                </p>
                <p>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange}/>
                </p>
                <p>
                    <label htmlFor="telefono">Teléfono</label>
                    <input type="text" name="telefono" onChange={handleChange}/>
                </p>
                <p>
                    <label htmlFor="comentario">comentario</label>
                    <textarea id="comentario" name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                </p>
                {sending ? <p>Enviando... </p> : null}
                {msg ? <p>{msg}</p> : null}
                <p className="centrar"><input type="submit" value="enviar" /></p>
            </form>
        </div>
        <div className="columna right">
            <h2>Otras vias de Contacto</h2>
            <p>Tambien se puede comunicar con nosotros ....</p>
            <ul>
                <li>Telefono: 4578-7894</li>
                <li>Email: contacto@transportesX.com.ar</li>
                <li>Facebook:</li>
                <li>Twitter</li>
                <li>Skaype</li>
            </ul>
        </div>
    </main>
    );
}
export default ContactoPage;