import React from 'react'
import { useState, useContext } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { CartContext } from '/Users/ignaciosimonetti/Desktop/go-gauchos/src/context/CartContext';
import { db } from '/Users/ignaciosimonetti/Desktop/go-gauchos/src/services/fireBaseConfig'



const Form = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [orderId, setOrderId] = useState('');

    const { cart, totalPrecio,deleteAll } = useContext(CartContext);
    const totalCarrito = totalPrecio();


    const enviarDatos = (e) => {
        e.preventDefault();  
       
        const objOrden = {
        comprador: {
            nombre: name,
            apellido: lastName,
            telefono: 123456,
            direccion: 'Calle false 123',
            email: 'igna@coder.com',
        },
        items: cart,
        total: totalCarrito,
        date: serverTimestamp(),
       };
       
    const orderCollection = collection(db, 'orders')

    addDoc(orderCollection, objOrden)
       .then((res) => {
          setOrderId(res.id);
          deleteAll();
       })
       .catch((error) => {
          console.log('Hubo un error', error);
       });   
  };


    const handleName = (e) => setName(e.target.value);

    const handleLastName = (e) => setLastName(e.target.value);

    if (orderId) {
      return (
        <h1>Gracias por tu compra tu número de seguimiento es {orderId}</h1>
      );
    }
 

  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form action="" onSubmit={enviarDatos}>
        <input
          type="text"
          placeholder="Nombre"
          name="nombre"
          onChange={handleName}
          value={name}
        />
        <input
          type="text"
          placeholder="Apellido"
          name="apellido"
          onChange={handleLastName}
          value={lastName}
        />
       {/*  <input
          type="number"
          placeholder="Telefono"
          name="telefono"
          onChange={handlePhone}
          value={phone}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleEmail}
          value={email}
        /> */}
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default Form