import React, { useState, useEffect } from 'react';
import { Wrapper } from './Login.styles';
import { useSelector, useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';
import { setUser } from '../redux/slice/userSlice';
import { USERS } from '../repository/Query';
import Loading from '../component/Loading/Loading';

import { useNavigate } from 'react-router-dom';
export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const [userState, setUserState] = useState({ email: '', password: '' });

  const { loading, data, error } = useQuery(USERS);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserState({ ...userState, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userState);
    const user = data.Users.find((user) => user.email === userState.email);
    if (!user)
      return dispatch(setUser({ isLoggedIn: false, message: 'email or password is invalid' }));

    const isValidPass = user.password === userState.password;
    if (!isValidPass)
      return dispatch(setUser({ isLoggedIn: false, message: 'email or password is invalid' }));

    dispatch(setUser({ ...userState, isLoggedIn: true, message: '' }));
    localStorage.setItem('author', user.id);
    navigate('/dashboard');

    return;
    // dispatch(setUser({ [name]: value }));
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Wrapper>
          <h1>User Login</h1>
          {!user.isLoggedIn && <h4 className='error'>{user.message}</h4>}
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label className='form-label' htmlFor='email'>
                email
              </label>
              <input
                type='email'
                name='email'
                placeholder='email address'
                className='form-control'
                onChange={handleChange}
              />
            </div>
            <div className='form-group'>
              <label className='form-label' htmlFor='password'>
                password
              </label>
              <input
                type='password'
                name='password'
                placeholder='password'
                className='form-control'
                onChange={handleChange}
              />
            </div>
            <button className='button'>login</button>
          </form>
        </Wrapper>
      )}
    </>
  );
};

export default Login;
