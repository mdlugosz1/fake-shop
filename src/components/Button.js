import styled from 'styled-components';

const Button = (props) => {
  return <MyButton onClick={props.action}>{props.text}</MyButton>;
};

const MyButton = styled.button``;

export default Button;
