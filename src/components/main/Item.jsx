

import React from 'react'
import {Link} from 'react-router-dom';

const Item = ({products}) => {
    return (
      <div className="item">
        <img src={products.img} width="200px" alt={products.title} />
        <article className='info'>
            <h2>{products.title}</h2>
            <h4 className='descuento'>{products.descuento}% off</h4>
            <div className='info-price'>
                <h3>${(products.price) - (products.price * products.descuento / 100)}.-</h3>
                <h5>${products.price}.</h5>
            </div>
            <Link className='btn-detalle' to={`/detail/${products.id}`}>Ver Detalle</Link> 
        </article>
       
      </div>
    );
}

export default Item