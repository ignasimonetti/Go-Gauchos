import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '/Users/ignaciosimonetti/Desktop/go-gauchos/src/context/CartContext'



const Cart = () => {
  const {cart, deleteAll, deleteOne, totalPrecio} = useContext(CartContext);

  if (cart.lenght === 0) 
    return (
      <h1>
        Aún no hay productos, volvé al <Link to="/">Home</Link>
      </h1>
    );

  return (
    <div>
      {cart.map((prod) => (
        <div key={prod.id}>
          <img src={prod.img} alt={prod.title} width="80px" />
          <div>
            <h3>{prod.title}</h3>
            <h3>{prod.cantidad}</h3>
            <button onClick={() => deleteOne(prod.id)}>
              Eliminar producto
            </button>
          </div>
        </div>
      ))}
      <h2>Total: ${totalPrecio()}</h2>
      <button onClick={deleteAll}>Vaciar carrito</button>
      <Link to="/checkout" className="btn light lg btn-outline-secondary btn-lg  rounded-2 mb-4 mx-auto"> Checkout </Link>
    </div>
  );
};

export default Cart;