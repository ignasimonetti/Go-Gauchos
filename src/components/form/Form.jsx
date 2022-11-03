import React from 'react'
import { useState } from 'react';


const Form = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');

    const enviarDatos = (e) => {
        e.preventDefault();  
       
        const obj = {
        comprador: {
            nombre: name,
            apellido: lastName
        }
       }
    };


    const handleName = (e) => setName(e.target.value);

    const handleLastName = (e) => setLastName(e.target.value);
 

  return (
    <div style={{ minHeight: '70vh' , display: 'flex' , justifyContent: 'center' , alignItems: 'center' , }}>
        <form action="" onSubmit={enviarDatos}>
            <input type="text" placeholder='Nombre' name='nombre' onChange={handleName} value={name}/>
            <input type="text" placeholder='Apellido' name='apellido' onChange={handleLastName} value={lastName}/>
            <button>Enviar</button>
        </form>
    </div>
  );
}

export default Form