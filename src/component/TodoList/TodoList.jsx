import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { TODOS } from '../../repository/Query';
import Loading from '../Loading/Loading';
import TodoCard from '../TodoCard/TodoCard';
import { Wrapper, Container, TodoContainer } from './TodoList.styles';

const TodoList = () => {
  const { loading, data, error } = useQuery(TODOS);
  // console.log(data);
  const [todo, setTodo] = useState({
    author: localStorage.getItem('author'),
    title: '',
    body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, corrupti.',
    done: false,
  });
  useEffect(() => {}, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(todo);
  };
  return loading ? (
    <Loading />
  ) : (
    <Wrapper>
      <h4>Todo List</h4>
      <Container>
        <form onSubmit={handleSubmit} className='form-container'>
          <div className='form-control'>
            <input
              type='text'
              placeholder='your todo list'
              name='title'
              value={todo.title}
              className='form-input'
              onChange={handleChange}
            />
          </div>
          <button className='button'>add</button>
        </form>
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
