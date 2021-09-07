import styled from 'styled-components';
import Button from './Button';
import front from '../assets/front.png';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <MainSection>
      <div className="container">
        <MainContent>
          <Headings>
            <MainHeading>Fake shop</MainHeading>
            <SecondaryHeading>
              Our fake shop is probably the best fake shop you could imagine. Here you can choose
              things we have in our asortiment like electronics, clothes, jewellery and then... you
              can't even buy them!
            </SecondaryHeading>
            <Link to="/shop">
              <Button text="Start shopping" />
            </Link>
          </Headings>
          <MainImage alt="whatever" src={front} />
        </MainContent>
      </div>
    </MainSection>
  );
};

const MainSection = styled.section`
  height: 93vh;
  background-color: #f7f7f7;
`;

const MainContent = styled.div`
  position: relative;
  &:after {
    content: '';
    position: absolute;
    height: 50rem;
    width: 50rem;
    border: 10px solid #3a4468;
    background-color: #3a4468;
    top: -5rem;
    left: 55%;
    border-radius: 100%;
    z-index: 0;
    animation: 1.5s ease 0s 1 normal none running fade;
    @keyframes fade {
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

const Headings = styled.div`
  postion: absolute;
  padding-top: 10em;
  width: 50%;
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
  & a > button {
    margin-top: 2em;
    font-size: 1rem;
    font-weight: 700;
    color: white;
  }
`;

const MainImage = styled.img`
  position: absolute;
  right: -195px;
  top: 200px;
  z-index: 100;
  animation: 2.5s ease 0s 1 normal none running show;
  @keyframes show {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 0.5;
    }

    100% {
      opacity: 1;
    }
  }
`;

const MainHeading = styled.h1`
  font-size: 46px;
  color: #3a4468;
`;

const SecondaryHeading = styled.h3`
  position: relative;
  color: #6d6d6d;
  word-wrap: word;
  margin-top: 2em;
  line-height: 1.25em;
`;

export default Main;
