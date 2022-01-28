import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useSelector } from 'react-redux';

// query
import { TODOS } from '../../repository/Query';

// components
import Loading from '../Loading/Loading';
import TodoCard from '../TodoCard/TodoCard';
import TodoInput from '../Form/TodoInput';

import { Wrapper, Container, TodoContainer } from './TodoList.styles';

const TodoList = () => {
  const { loading, data, refetch } = useQuery(TODOS);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (data) setTodos(data.Todos);
  }, [data, loading]);

  return loading ? (
    <Loading />
  ) : (
    <Wrapper>
      <h4>Todo List</h4>
      <Container>
        <TodoInput />
        <TodoContainer>
          {todos.map((todo) => (
            <TodoCard key={todo.id} todo={todo} />
          ))}
        </TodoContainer>
      </Container>
    </Wrapper>
  );
};

export default TodoList;
