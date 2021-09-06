import Cart from './Cart';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Header>
      <nav>
        <NavList>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>

          <NavItem>
            <Link to="/shop">Shop</Link>
          </NavItem>

          <NavItem>
            <Cart />
          </NavItem>
        </NavList>
      </nav>
    </Header>
  );
};

const Header = styled.header`
  background-color: #599599;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  list-style: none;
  margin-right: 10em;
`;

const NavItem = styled.li`
  padding: 2rem;
  z-index: 10;
  & a {
    font-size: 18px;
    text-decoration: none;
    color: white;
    text-transform: uppercase;
  }
`;

export default Navigation;
