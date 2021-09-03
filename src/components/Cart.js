import { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import Checkout from './Checkout';

const Cart = () => {
  const [isClicked, setIsClicked] = useState(false);

  const { sumItemQuantity } = useContext(CartContext);

  return (
    <div onClick={() => setIsClicked(!isClicked)}>
      <i className="bi bi-cart3"></i>
      {sumItemQuantity() > 0 && <span>{sumItemQuantity()}</span>}
      {isClicked && <Checkout />}
    </div>
  );
};

export default Cart;
