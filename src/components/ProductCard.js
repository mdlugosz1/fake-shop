import Button from './Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';

const ProductCard = (props) => {
  const [items, setItems] = useContext(CartContext);

  const addItemToCart = () => {
    setItems(items + 1);
  };

  return (
    <Card>
      <div>
        <Link to={`/shop/${props.id}`}>
          <ProductImage alt="product" src={props.image} />
        </Link>
        {/* <p>{props.description}</p> */}
      </div>
      <h4>{props.title}</h4>
      <h4>{props.price}$</h4>
      <Button text="Add to cart" action={addItemToCart} />
    </Card>
  );
};

const ProductImage = styled.img`
  height: 100px;
  width: 100px;
`;

const Card = styled.div`
  animation: 2.5s ease 0s 1 normal none running fadeIn;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
export default ProductCard;
