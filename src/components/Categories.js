import styled from 'styled-components';

const Categories = (props) => {
  return (
    <CategoriesConatiner>
      <h3>Categories</h3>
      <ul>
        <li onClick={() => props.filterItems('all')}>All</li>
        {props.categories.map((category) => {
          return <li onClick={() => props.filterItems(category)}>{category}</li>;
        })}
      </ul>
    </CategoriesConatiner>
  );
};

const CategoriesConatiner = styled.div`
  grid-column: 1/2;
  grid-row: 1/6;
`;

export default Categories;
