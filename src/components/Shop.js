import Categories from './Categories';
import ProductCard from './ProductCard';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const Shop = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((value) => setItems(value));
  };

  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const categories = await fetch('https://fakestoreapi.com/products/categories')
      .then((response) => response.json())
      .then((categories) => setCategoriesList(categories));
  };

  const [filter, setFilter] = useState('');

  const filterItemsByCategory = (cat) => {
    const newSet = items.filter(({ category }) => category === cat);

    if (cat === 'all') {
      setFilter('');
    } else {
      setFilter(newSet);
    }
  };

  return (
    <ShopContent>
      <div className="container">
        <Categories categories={categoriesList} filterItems={filterItemsByCategory} />
        {!filter
          ? items.map((item) => {
              return (
                <ProductCard
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                  id={item.id}
                />
              );
            })
          : filter.map((item) => {
              return (
                <ProductCard
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                  id={item.id}
                />
              );
            })}
      </div>
    </ShopContent>
  );
};

const ShopContent = styled.section`
  > .container {
    display: grid;
    grid-gap: 40px;
    grid-template-columns: 150px repeat(4, 1fr);
    grid-template-rows: repeat(5, 200px);
  }
`;
export default Shop;
