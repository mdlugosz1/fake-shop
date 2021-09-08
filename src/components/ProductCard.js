import Button from './Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from './CartContext';

const ProductCard = (props) => {
  const { addItem } = useContext(CartContext);

  /* const addItemToCart = () => {
    setItems(items + 1);
  }; */
  /* console.log(addItem); */

  return (
    <Card>
      <ImageContainer>
        <Link to={`/shop/${props.id}`}>
          <ProductImage alt="product" src={props.image} />
        </Link>
        {/* <p>{props.description}</p> */}
      </ImageContainer>
      <h4>{props.title}</h4>
      <h4>{props.price}$</h4>
      <Button text="Add to cart" action={() => addItem(props)} />
    </Card>
  );
};

const ImageContainer = styled.div`
  height: 100%;
  width: 100;
  border: 1px solid grey;
  display: flex;
  align-items: center;
  justify-content: center;
  & a {
    height: 70%;
    width: 70%;
  }
`;

const ProductImage = styled.img`
  height: 100%;
  width: 100%;
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
