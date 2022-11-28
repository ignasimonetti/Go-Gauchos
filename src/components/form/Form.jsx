import React from 'react'
import { useState, useContext } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { CartContext } from '/Users/ignaciosimonetti/Desktop/go-gauchos/src/context/CartContext';
import { db } from '/Users/ignaciosimonetti/Desktop/go-gauchos/src/services/fireBaseConfig'



const Form = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [mail, setMail] = useState('');
    const [mailDos, setMailDos] = useState('');
    const [orderId, setOrderId] = useState('');

    const { cart, totalPrecio,deleteAll } = useContext(CartContext);
    const totalCarrito = totalPrecio();


    const enviarDatos = (e) => {
        e.preventDefault();  
       
        const objOrden = {
        comprador: {
            nombre: name,
            apellido: lastName,
            telefono: phone,
            direccion: address,
            email: mail,
            emailDos: mailDos
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

    const handlePhone = (e) => setPhone(e.target.value);

    const handleAddress = (e) => setAddress(e.target.value);

    const handleMail = (e) => setMail(e.target.value);

    const handleMailDos = (e) => setMailDos(e.target.value);

    if (orderId) {
      return (
        <h1>Gracias por tu compra tu número de seguimiento es: {orderId}</h1>
      );
    }
 
  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        flexDirection: "column",
        marginTop: "30px",
      }}
    >
      <form action="" name="" onSubmit={enviarDatos}>
        <label style={{ display: "block" }} id="lbl1" name="lbl1" for="txt1">
          Nombre:
        </label>
        <input
          type="text"
          name="nombre"
          required
          onChange={handleName}
          value={name}
        />
        <label
          style={{ display: "block", marginTop: "20px" }}
          id="lbl1"
          name="lbl1"
          for="txt1"
        >
          Apellido
        </label>
        <input
          type="text"
          name="apellido"
          required
          onChange={handleLastName}
          value={lastName}
        />
        <label
          style={{ display: "block", marginTop: "20px" }}
          id="lbl1"
          name="lbl1"
          for="txt1"
        >
          Teléfono
        </label>
        <input
          type="number" 
          name="telefono"
          onChange={handlePhone}
          value={phone}
          required
        />
        <label
          style={{ display: "block", marginTop: "20px" }}
          id="lbl1"
          name="lbl1"
          for="txt1"
        >
          Dirección
        </label>
        <input
          type="text"
          name="direccion"
          required
          onChange={handleAddress}
          value={address}
        />
        <label
          style={{ display: "block", marginTop: "20px" }}
          id="lbl1"
          name="lbl1"
          for="txt1"
        >
          E-mail
        </label>
        <input
          type="email"
          name="mail"
          required
          onChange={handleMail}
          value={mail}
        />
        <br></br>
        <label
          style={{ display: "block", marginTop: "20px" }}
          id="lbl1"
          name="lbl1"
          for="txt1"
        >
          Repetir E-mail
        </label>
        <input
          type="email"
          name="mailDos"
          required
          onChange={handleMailDos}
          value={mailDos}
        />
        <br></br>
        <button disabled={mail !== mailDos}>Enviar</button>
      </form>
      
    </div>
  );
}

export default Form