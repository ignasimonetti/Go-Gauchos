
import { useState } from  'react';



const ItemCount = ({stock, onAdd}) => {

   const [cantidad, setCantidad] = useState(0)

    const sumar = () =>{
        if (cantidad < stock){
        setCantidad(cantidad + 1)
        }
      };

      const restar = () =>{
        if (cantidad > 0){
        setCantidad(cantidad - 1)
        }
      }

    const reset = () =>{
        setCantidad (0);
    };


  return (
    <>
      <div className="contador">
        <section> 
          <p>{cantidad}</p>
          <div> 
            <button disabled={cantidad === stock} onClick={sumar}>
              +
            </button>
            <button disabled={cantidad === 0} onClick={restar}>
              -
            </button>
            <button disabled={cantidad === 0} onClick={reset}>
              Vaciar
            </button>
          </div>
        </section>
        <div>
          <button className='add' disabled={cantidad === 0} onClick={() => onAdd(cantidad)}>Agregar al carrito</button>
        </div>
      </div>
    </>
  );
};

export default ItemCount;