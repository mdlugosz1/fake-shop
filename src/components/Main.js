import styled from 'styled-components';
import Button from './Button';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <MainSection>
      <div className="container">
        <MainContent>
          <h1>Super Sklep</h1>
          <img alt="whatever" />
          <Link to="/shop">
            <Button text="Start shopping" />
          </Link>
        </MainContent>
      </div>
    </MainSection>
  );
};

const MainSection = styled.section`
  border: 1px solid blue;
  height: 80vh;
  overflow: hidden;
`;

const MainContent = styled.div`
  border: 1px solid black;
  position: relative;
  animation: 0.5s ease 0s 1 normal none running fadeIn;
  @keyframes fadeIn {
    0% {
      opacity: 0;
      margin-left: -100px;
    }
    100% {
      opacity: 1;
      margin-left: 0;
    }
  }
  &:after {
    content: '';
    position: absolute;
    height: 50rem;
    width: 50rem;
    border: 1px solid red;
    top: -5rem;
    left: 45%;
    border-radius: 100%;
    z-index: 0;
    animation: 2.5s ease 0s 1 normal none running fadeIn;
    @keyframes fadeIn {
      0% {
        opacity: 0;
        top: 200px;
      }
      100% {
        opacity: 1;
        top: -5rem;
      }
    }
  }
`;
export default Main;
