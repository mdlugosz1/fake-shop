import Categories from './Categories';
import ProductCard from './ProductCard';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const Shop = () => {
  const [items, setItems] = useState([]);
  const controller = new AbortController();
  const signal = controller.signal;

  useEffect(() => {
    fetchItems();

    return () => controller.abort();
  }, []);

  const fetchItems = async () => {
    await fetch('https://fakestoreapi.com/products', signal)
      .then((response) => response.json())
      .then((value) => setItems(value));

    console.log('FETCH ITEMS');
  };

  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    fetchCategories();

    return () => controller.abort();
  }, []);

  const fetchCategories = async () => {
    await fetch('https://fakestoreapi.com/products/categories', signal)
      .then((response) => response.json())
      .then((categories) => setCategoriesList(categories));

    console.log('INVOKE');
  };

  const [filter, setFilter] = useState('');

  const filterItemsByCategory = (cat) => {
    if (cat === 'all') {
      setFilter('');
    } else {
      const newSet = items.filter(({ category }) => category === cat);
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
                  price={item.price.toFixed(2)}
                  image={item.image}
                  id={item.id}
                  key={item.id}
                />
              );
            })
          : filter.map((item) => {
              return (
                <ProductCard
                  title={item.title}
                  description={item.description}
                  price={item.price.toFixed(2)}
                  image={item.image}
                  id={item.id}
                  key={item.id}
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
