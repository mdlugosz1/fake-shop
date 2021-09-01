import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const ProductPage = ({ match }) => {
  const [itemDetails, setItemDetails] = useState({});

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const item = await fetch(`https://fakestoreapi.com/products/${match.params.id}`)
      .then((value) => value.json())
      .then((item) => setItemDetails(item));
  };

  return (
    <div>
      <img alt="product" src={itemDetails.image} />
      <h2>{itemDetails.title}</h2>
      <p>{itemDetails.description}</p>
      <Link to="/shop">
        <Button text="Back to shop" />
      </Link>
    </div>
  );
};

export default ProductPage;
