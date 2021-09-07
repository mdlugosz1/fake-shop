import { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import Checkout from './Checkout';
import styled from 'styled-components';

const Cart = () => {
  const [isClicked, setIsClicked] = useState(false);

  const { sumItemQuantity } = useContext(CartContext);

  return (
    <NavCart className>
      <i className="bi bi-cart3" onClick={() => setIsClicked(!isClicked)}></i>
      {sumItemQuantity() > 0 && <CartCounter>{sumItemQuantity()}</CartCounter>}
      {isClicked && <Checkout />}
    </NavCart>
  );
};

const NavCart = styled.div`
  position: relative;
`;

const CartCounter = styled.span`
  position: absolute;
  display: inline-block;
  min-width: 10px;
  padding: 3px 3px;
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
  color: #3a4468;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  background-color: #f3c93e;
  border: 2px solid #f3c93e;
  border-radius: 10px;
  margin-top: -15px;
`;

export default Cart;
