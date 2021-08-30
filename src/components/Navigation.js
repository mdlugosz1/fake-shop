import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <header>
      <nav className="container">
        <NavList>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>

          <NavItem>
            <Link to="/shop">Shop</Link>
          </NavItem>

          <NavItem
            onScroll={() => {
              console.log('jebac pis');
            }}>
            <i className="bi bi-cart3"></i>
          </NavItem>
        </NavList>
      </nav>
    </header>
  );
};

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  list-style: none;
  z-index: 10;
`;

const NavItem = styled.li`
  padding: 2rem;
  z-index: 10;
`;

export default Navigation;
