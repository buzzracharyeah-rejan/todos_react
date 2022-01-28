import React, { useState } from 'react';
import useMutation from '../../hooks/useMutationHook';

import { useDispatch } from 'react-redux';
import { CREATE_TODO } from '../../repository/Mutation';
import { setTodoStatus } from '../../redux/slice/todoSlice';
import { TODOS } from '../../repository/Query';

const TodoInput = ({ refetch }) => {
  const dispatch = useDispatch();
  const [createTodo, { loading }] = useMutation(CREATE_TODO);
  const [todo, setTodo] = useState({
    author: localStorage.getItem('author'),
    title: '',
    body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, corrupti.',
    done: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(todo);
    createTodo({
      variables: {
        data: {
          ...todo,
        },
      },
      refetchQueries: [{ query: TODOS }],
    });
    if (!loading) {
      dispatch(setTodoStatus({ createTodo: true }));
    }
  };
  return (
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
  );
};

export default TodoInput;
