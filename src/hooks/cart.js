import React, { useContext, useState } from "react";

const CartContext = React.createContext();

export const useCart = ()=>{
    return useContext(CartContext);
}

const CartProvider = ({children})=>{
    const [cart, setCart] = useState([]);

    const addToCart = (item)=> 
        setCart([{...item, id: cart.length + 1, quantity: 1}, ...cart]);

    const removeFromCart = (item)=>{
        setCart(cart.filter(i=> i.id !== item.id));
    }

    return <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
        {children}
    </CartContext.Provider>
}

export default CartProvider;