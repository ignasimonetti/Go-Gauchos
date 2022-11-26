
import ItemDetail from './ItemDetail';
import { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
/* import { getProduct } from "/Users/ignaciosimonetti/Desktop/go-gauchos/src/mock/products"; */
import { doc, getDoc } from 'firebase/firestore';
import {collectionProd} from '/Users/ignaciosimonetti/Desktop/go-gauchos/src/services/fireBaseConfig';




const ItemDetailContainer = () => {

    const [item, setItem] = useState ({});
    const [loading, setLoading] = useState(true);
    const {idProd} = useParams();


    useEffect(() => {
      const ref = doc(collectionProd, idProd);

      getDoc(ref)
        .then((res) => {
          setItem({
            id: res.id,
            ...res.data(),
          });
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
      
    }, [idProd]);
          

    if (loading) {
      return (  
      <div className="detail-container">
        <h1>Cargando...</h1>{" "}
      </div>
      );
    }


  return (
    <div className="detail-container">
      <ItemDetail item={item}/>
    </div>
  );
};

export default ItemDetailContainer





