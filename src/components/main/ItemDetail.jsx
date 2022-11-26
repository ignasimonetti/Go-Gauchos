import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import ItemCount from './ItemCount'


const ItemDetail = ({item}) => {
    const [show, setShow] = useState (true);

    const { addToCart} = useContext(CartContext);


    const onAdd = (argumento) => {
      console.log(argumento);
      setShow(false);
      addToCart(item, argumento)
    }
  
    return (
      <div className='detail'>
        <img className='detail-img' src={item.img} alt={item.title}/>
        <article className='detail-article'>
            <h2 className='detail-article-h2'>{item.title}</h2>
            <p className='detail-article-p'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
              id veritatis debitis aut accusantium c umque nobis vitae porro,
              maxime magni dolores illum ex necessitatibus dolor et quisquam
              tempora alias repudiandae?
            </p>
          <h3 className='detail-article-h3'>${item.price}</h3>
          {show ? (
          <ItemCount stock={item.stock} onAdd={onAdd} />
          ) : (
            <Link to="/cart">Ir al carrito</Link>
          )}
        </article>
      </div>
    );
  
}

export default ItemDetail;