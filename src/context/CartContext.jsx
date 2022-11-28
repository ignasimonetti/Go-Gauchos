import { useState, createContext}  from 'react';

export const CartContext = createContext();

const CartProvider  = ({children}) => {
    const  [cart, setCart] = useState ([]);

    /* funciones */
    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
        setCart(cart.map((prod) => {
            return prod.id === item.id ? { ...prod, cantidad : prod.cantidad + cantidad } : prod;
        }));
        } else {
        setCart([...cart, { ...item, cantidad }]);
        }
    };

    /* funcion para ver si esta en el carrito */
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };

    /* funcion para sumar la cantidad de un mismo producto */    
    const sumarCantidad = (itemPorAgregar, cantidad) => {
        
        const cartNuevo = cart.map((prodDelCarrito) => {
            if (prodDelCarrito.id === itemPorAgregar.id) { 
                const productoNuevo = {
                    ...prodDelCarrito,
                    cantidad: prodDelCarrito.cantidad += cantidad,
                };
                return productoNuevo;
            } else {
                return prodDelCarrito;
            }
        })
        setCart(cartNuevo);
    };
    
    /* funcion para vaciar el carrito */
    const deleteAll = () => {
        setCart([]);
    };

   /* funcion para eliminar un solo producto */
    const deleteOne = (id) => {
        const prodFiltrados = cart.filter((prod) => prod.id !== id);
        setCart(prodFiltrados);
    };
    

    /* funcion para sumar unidades total del carrito */

    const  totalUnidades = () => {
        let count = 0
        const copia = [...cart]
        copia.forEach((prod)=>{
            count = count + prod.cantidad
        })
        return count 
    };

    /* funcion para sumar precio total $ del carrito */
    const totalPrecio = () => {
        return cart.reduce((total, item) => total + item.cantidad * item.price, 0);
    };

    const cantidadDeProducto = (id) => {
      const product = cart.find((prod) => prod.id === id);
      return product?.cantidad;
    };

    return (
        <CartContext.Provider value={{cart, sumarCantidad,  addToCart, deleteAll, deleteOne, totalUnidades, totalPrecio, cantidadDeProducto}}>
            {children}
        </CartContext.Provider> 

)};


export default CartProvider;
