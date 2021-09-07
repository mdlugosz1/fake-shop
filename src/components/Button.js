import styled from 'styled-components';

const Button = (props) => {
  return <MyButton onClick={props.action}>{props.text}</MyButton>;
};

const MyButton = styled.button`
  border: none;
  background-color: #f3c93e;
  padding: 10px 45px;
  cursor: pointer;
`;

export default Button;
