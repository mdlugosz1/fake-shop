import styled from 'styled-components';

const Categories = (props) => {
  return (
    <CategoriesConatiner>
      <h3>Categories</h3>
      <ul>
        <li onClick={() => props.filterItems('all')}>All</li>
        {props.categories.map((category) => {
          return (
            <li onClick={() => props.filterItems(category)} key={Math.random()}>
              {category}
            </li>
          );
        })}
      </ul>
    </CategoriesConatiner>
  );
};

const CategoriesConatiner = styled.div`
  grid-column: 1/3;
  grid-row: 1/8;
  padding: 15px;
  & ul,
  h3 {
    border: 1px solid #e5e5e5;
    padding: 10px;
    margin-left: 20px;
    text-align: left;
    text-transform: uppercase;
  }
  & ul > li {
    cursor: pointer;
  }
`;

export default Categories;
