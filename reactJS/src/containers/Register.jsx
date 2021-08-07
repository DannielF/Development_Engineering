/* eslint-disable arrow-parens */
// This component has its own state
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Import module for connect the component with the store
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// Import the actions to execute in the store through this component
import { registerRequest } from '../actions';
import Header from '../components/Header';
import '../assets/styles/components/Register.scss';

// The component execute actions against the store, for this reason active its props
const Register = props => {
  // Declare the initial state of the component
  const [form, setValues] = useState({
    email: '',
    id: '',
    name: '',
    password: '',
  });
  // Listening for any change in the form
  const updateInput = event => {
    // Set up the new state of the component with the new values for each input, but keeping the preview values(Destructuring)
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  // handler function that executes after the send the form
  const handleSubmit = event => {
    event.preventDefault();
    // Execute the action, register the user in the store
    props.registerRequest(form);
    props.history.push('/');
  };

  return (
    <>
      <Header isRegister />
      <section className='register'>
        <section className='register__container'>
          <h2>Create account</h2>
          <form className='register__container--form' onSubmit={handleSubmit} >
            <input
              name='name'
              className='input'
              type='text'
              placeholder='Name'
              onChange={updateInput}
            />
            <input
              name='email'
              className='input'
              type='email'
              placeholder='Email'
              onChange={updateInput}
            />
            <input
              name='password'
              className='input'
              type='password'
              placeholder='Password'
              onChange={updateInput}
            />
            <button type='submit' className='button'>Sign In</button>
          </form>
          <Link to='/login' className='register__container--login'>
            Log In
          </Link>
        </section>
      </section>
    </>
  );
};

// Establish with actions will be execute this component in the store
const mapDispatchToProps = {
  registerRequest,
};
Register.propTypes = {
  registerRequest: PropTypes.func,
};

// Connect the component with the store
export default connect(null, mapDispatchToProps)(Register);
