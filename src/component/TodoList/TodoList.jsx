import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { TODOS } from '../../repository/Query';
import Loading from '../Loading/Loading';
import TodoCard from '../TodoCard/TodoCard';
import TodoInput from '../Form/TodoInput';
import { Wrapper, Container, TodoContainer } from './TodoList.styles';

const TodoList = () => {
  const { loading, data, error } = useQuery(TODOS);
  // console.log(data);

  useEffect(() => {}, []);

  return loading ? (
    <Loading />
  ) : (
    <Wrapper>
      <h4>Todo List</h4>
      <Container>
        <TodoInput />
        <TodoContainer>
          {data.Todos.map((todo) => (
            <TodoCard key={todo.id} todo={todo} />
          ))}
        </TodoContainer>
      </Container>
    </Wrapper>
  );
};

export default TodoList;
