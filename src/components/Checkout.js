import Button from './Button';
import { useContext } from 'react';
import { CartContext } from './CartContext';

const Checkout = () => {
  const { boughtItemList, addItem, removeItem } = useContext(CartContext);

  const roundToTwo = (num) => {
    return +(Math.round(num + 'e+2') + 'e-2');
  };

  return (
    <div>
      {boughtItemList.map((element) => {
        if (element.quantity > 0) {
          return (
            <div key={element.addedItem.id}>
              <img alt="product"></img>
              <div>
                <h3>{element.addedItem.title}</h3>
                <h3>{(element.addedItem.price * element.quantity).toFixed(2)}</h3>
                <div>
                  <Button text="-" action={() => removeItem(element.addedItem)} />
                  <span>{element.quantity}</span>
                  <Button text="+" action={() => addItem(element.addedItem)} />
                </div>
              </div>
            </div>
          );
        }
      })}

      {boughtItemList.find(({ quantity }) => quantity > 0) ? (
        <div>
          <h2>
            {roundToTwo(
              boughtItemList.reduce((a, b) => {
                return a + b.addedItem.price * b.quantity;
              }, 0)
            ).toFixed(2)}
          </h2>

          <Button text="checkout" />
          <Button text="close" />
        </div>
      ) : (
        <div>
          <p>Looks like your cart is empty!</p>
        </div>
      )}
    </div>
  );
};

export default Checkout;
