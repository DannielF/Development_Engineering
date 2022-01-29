/* eslint-disable arrow-parens */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginRequest } from '../actions';
import '../assets/styles/components/Login.scss';
import Header from '../components/Header';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const Login = props => {
  const [form, setValues] = useState({
    email: '',
    id: '',
    name: '',
  });
  const updateInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  };
  return (
    <>
      <Header isLogin />
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
              onChange={updateInput}
            />
            <input
              aria-label='password'
              name='Password'
              className='input'
              type='password'
              placeholder='Password'
              onChange={updateInput}
            />
            <button type='submit' className='button'>Log In</button>
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
            {' '}
            <Link to='/register'>
              Sign In
            </Link>
          </p>
        </section>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  loginRequest,
};
Login.propTypes = {
  loginRequest: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Login);
