// Stateless component
import React from 'react';
import '../assets/styles/components/Header.scss';

const Header = () => (
  <header className='header'>
    <div className='header__logo'>
      <img
        className='header__img'
        src='./PlatziVideo/logo-platzi-video-BW2.png'
        alt='Logo'
      />
    </div>
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src='./PlatziVideo/user-icon.png' alt='User icon' />
        <p>Perfil</p>
      </div>
      <ul>
        <li>
          <a className='header__menu--links' href='/login.html'>
            Cuenta
          </a>
        </li>
        <li>
          <a className='header__menu--links' href='/'>
            Cerrar sesión
          </a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
