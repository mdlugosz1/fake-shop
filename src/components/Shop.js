import Categories from './Categories';
import ProductCard from './ProductCard';
import styled from 'styled-components';

const Shop = () => {
  return (
    <ShopContent>
      <div className="container">
        <Categories />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </ShopContent>
  );
};

const ShopContent = styled.section`
  > .container {
    display: grid;
    grid-template-columns: 150px repeat(4, 1fr);
    grid-template-rows: repeat(5, 200px);
  }
`;
export default Shop;
