import { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = (props) => {
  const [quantity, setQuantity] = useState(0);
  return (
    <CartContext.Provider value={[quantity, setQuantity]}>{props.children}</CartContext.Provider>
  );
};

export { CartContext, CartProvider };
