import React from 'react'
import ItemCount from './ItemCount'


const ItemDetail = ({item}) => {

    const onAdd = (argumento) => console.log(argumento);
  
    return (
      <div className='detail'>
        <img className='detail-img' src={item.img} alt={item.title}/>
        <article className='detail-article'>
          <h2>{item.title}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            id veritatis debitis aut accusantium c umque nobis vitae porro,
            maxime magni dolores illum ex necessitatibus dolor et quisquam
            tempora alias repudiandae?
          </p>
          <h3>${item.price}</h3>
          <ItemCount stock={item.stock} onAdd={onAdd} />
        </article>
      </div>
    );
  
}

export default ItemDetail