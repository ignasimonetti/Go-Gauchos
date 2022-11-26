


import { useContext } from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { CartContext } from '../../context/CartContext';


const Cartwidget = () => {

    const {totalUnidades} = useContext(CartContext);

    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <AiOutlineShoppingCart size={25} color="red"/>
            <span>{totalUnidades() !== 0 && totalUnidades()}</span>
        </div>
    
    );
}

export default Cartwidget