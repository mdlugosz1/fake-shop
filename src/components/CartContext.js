import { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = (props) => {
  const [boughtItemList, setBoughtItemList] = useState([]);

  const searchForItem = (item) => {
    return boughtItemList.find((element) => element.addedItem.id === item.id);
  };

  const addItem = (addedItem) => {
    const findItem = searchForItem(addedItem);

    //Add quantity key while adding product if it isn't on the list, increase it by one if it is.
    if (!findItem) {
      setBoughtItemList([...boughtItemList, { addedItem, quantity: 1 }]);
    } else {
      setBoughtItemList((prevState) => {
        findItem.quantity += 1;
        return [...prevState];
      });
    }
  };

  const removeItem = (itemToRemove) => {
    const findItem = searchForItem(itemToRemove);

    if (findItem.quantity > 0) {
      setBoughtItemList((prevState) => {
        findItem.quantity -= 1;
        return [...prevState];
      });
    }
  };

  //Used to show number on cart icon
  const sumItemQuantity = () => {
    let sum = 0;

    boughtItemList.forEach((item) => {
      sum += item.quantity;
    });

    return sum;
  };

  return (
    <CartContext.Provider value={{ addItem, sumItemQuantity, boughtItemList, removeItem }}>
      {props.children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
