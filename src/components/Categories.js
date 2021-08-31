import styled from 'styled-components';

const Categories = () => {
  return (
    <CategoriesConatiner>
      <h3>Categories</h3>
      <ul>
        <li>Category</li>
        <li>Category</li>
        <li>Category</li>
        <li>Category</li>
      </ul>
    </CategoriesConatiner>
  );
};

const CategoriesConatiner = styled.div`
  grid-column: 1/2;
  grid-row: 1/6;
`;

export default Categories;
