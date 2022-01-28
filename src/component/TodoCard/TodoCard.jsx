import React from 'react';
import { Wrapper } from './TodoCard.styles';

const TodoCard = ({ todo: { title, body, author, done }, ...rest }) => {
  // console.log({ title, body, author, done });
  return <Wrapper>todo card</Wrapper>;
};

export default TodoCard;
