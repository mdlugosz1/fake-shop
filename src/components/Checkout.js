import Button from './Button';
import { useContext } from 'react';
import { CartContext } from './CartContext';

const Checkout = () => {
  const { boughtItemList } = useContext(CartContext);

  return (
    <div>
      {boughtItemList.map((element) => {
        return (
          <div>
            <img alt="product"></img>
            <div>
              <h3>{element.addedItem.title}</h3>
              <h3>{element.addedItem.price * element.quantity}</h3>
              <div>
                <Button text="-" />
                <span>{element.quantity}</span>
                <Button text="+" />
              </div>
            </div>
          </div>
        );
      })}

      <div>
        <h2>
          {boughtItemList.reduce((a, b) => {
            return a + Math.round(b.addedItem.price * b.quantity * 100) / 100;
          }, 0)}
        </h2>
        <Button text="checkout" />
        <Button text="close" />
      </div>
    </div>
  );
};

export default Checkout;
