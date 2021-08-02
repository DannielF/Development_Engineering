/* eslint-disable arrow-parens */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const Login = () => {
  const [form, setValues] = useState({
    email: '',
  });
  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    console.log(form);
  };
  return (
    <section className='login'>
      <section className='login__container'>
        <h2>Log In</h2>
        <form className='login__container--form' onSubmit={handleSubmit}>
          <input
            aria-label='Mail'
            name='Email'
            className='input'
            type='text'
            placeholder='email'
            onChange={handleInput}
          />
          <input
            aria-label='password'
            name='Password'
            className='input'
            type='password'
            placeholder='Password'
            onChange={handleInput}
          />
          <button type='button' className='button'>Log In</button>
          <div className='login__container--remember'>
            <label htmlFor='cbox1'>
              <input type='checkbox' name='' id='cbox1' value='checkbox' />
              Remember me
            </label>
            <a href='/'>I forgot my password</a>
          </div>
        </form>
        <section className='login__container--social-media'>
          <div>
            <img
              src={googleIcon}
              alt='logo google'
            />
            <p>Sign in with Google</p>
          </div>
          <div>
            <img src={twitterIcon} alt='logo Twitter' />
            <p>Sign in with Twitter</p>
          </div>
        </section>
        <p className='login__container--register'>
          You don&apos;t have account
          <Link to='/register'>
            Sign In
          </Link>
        </p>
      </section>
    </section>
  );
};

export default Login;
