import React from 'react';
import { Wrapper } from './TodoCard.styles';

const TodoCard = ({ todo: { title, body, author, done }, ...rest }) => {
  // console.log({ title, body, author, done });
  return (
    <Wrapper>
      <p>{title}</p>
    </Wrapper>
  );
};

export default TodoCard;
