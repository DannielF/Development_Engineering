import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import '../assets/styles/components/Header.scss';
import logoPlatzi from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).lenght > 0;
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
          <li>
            <a className='header__menu--links' href='/login.html'>
              Account
            </a>
          </li>
          <li>
            <Link to='/login' className='header__menu--links'>
              Log In
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Header);
