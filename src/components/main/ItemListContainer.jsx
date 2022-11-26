
import React from "react";
import { useEffect , useState} from "react";
import { getProducts } from '/Users/ignaciosimonetti/Desktop/go-gauchos/src/mock/products';
import ItemList from './ItemList';
import { useParams } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import {getDocs, query, where} from 'firebase/firestore';
import { collectionProd } from '/Users/ignaciosimonetti/Desktop/go-gauchos/src/services/fireBaseConfig';


const ItemListContainer = () => {
    const [items, setItems] = useState ([]);
    const [loading, setLoading] = useState (true);

const { categoryName } = useParams();
    
    
    useEffect (() => {
        
        getDocs(collectionProd)
            .then ((res) => {
                const products = res.docs.map((prod) => {
                    return {
                        id: prod.id,
                        ...prod.data(),
                    };
                });
                setItems(products);
            })
            .catch ((error) => {
                console.log (error);
            })
            .finally(() => {
                setLoading(false);
            });

        return () => setLoading(true);
    }, [categoryName]);

    if (loading) {
        return (
            <div className="container">
                <Skeleton count={7} width={200} height={40} />
            </div>
        );
    }
        
    return (
        <div id="container">
            <ItemList items={items}/>
        </div>
    );
};

export default ItemListContainer;

