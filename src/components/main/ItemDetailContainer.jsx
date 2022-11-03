
import React from 'react';
import ItemDetail from './ItemDetail';
import { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from "/Users/ignaciosimonetti/Desktop/go-gauchos/src/mock/products";



const ItemDetailContainer = () => {

    const [item, setItem] = useState ({});
    const {idProd} = useParams();


    useEffect(() => {
        const getProduct = () => {
          return new Promise ((res, rej) => {
                const product = products.find ((prod) => prod.id === +idProd);
                setTimeout (() => {
                  res(product);
                }, 2000);     
            });
        };

        getProduct()
          .then((res)=> {
            setItem(res);
          })
          .catch((error)=> {
            console.log(error)
          })
    }, [idProd]);


  return (
    <div className="detail-container">
      <ItemDetail item={item} />
    </div>
  );
}

export default ItemDetailContainer





