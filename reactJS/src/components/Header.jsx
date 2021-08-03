/* eslint-disable arrow-parens */
/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import '../assets/styles/components/Header.scss';
import logoPlatzi from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  return (
    <header className='header'>
      <div className='header__logo'>
        <Link to='/'>
          <img
            className='header__img'
            src={logoPlatzi}
            alt='Logo'
          />
        </Link>
      </div>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          {hasUser ?
            <img src={gravatar(user.email)} alt={user.email} /> :
            <img src={userIcon} alt='User icon' />}
          <p>Profile</p>
        </div>
        <ul>
          {hasUser ?
            <li>
              <a className='header__menu--links' href='/login.html'>
                Account
              </a>
            </li> : null}
          {hasUser ?
            <li><a href='#Logout' onClick={handleLogout}>Logout</a></li> :
            <li>
              <Link to='/login' className='header__menu--links'>
                Log In
              </Link>
            </li>}
        </ul>
      </div>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.object,
  logoutRequest: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
