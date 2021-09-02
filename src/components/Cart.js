import { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
  const [quantity] = useContext(CartContext);

  return (
    <div>
      <i className="bi bi-cart3"></i>
      {quantity > 0 && <span>{quantity}</span>}
    </div>
  );
};

export default Cart;
