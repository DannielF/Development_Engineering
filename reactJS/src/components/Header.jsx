// Stateless component
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import logoPlatzi from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = () => (
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
        <img src={userIcon} alt='User icon' />
        <p>Perfil</p>
      </div>
      <ul>
        <li>
          <a className='header__menu--links' href='/login.html'>
            Cuenta
          </a>
        </li>
        <li>
          <Link to='/login' className='header__menu--links'>
            Iniciar sesión
          </Link>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
