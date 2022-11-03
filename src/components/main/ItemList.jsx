

import React from 'react';
import Item from './Item';

const ItemList = ({items}) => {
    return (
        <div className='item-list'>
            {items.map((products) => {
                return (
                    <Item products={products} key={products.id}/>
                );
            })}
        </div>
    );
}

export default ItemList;