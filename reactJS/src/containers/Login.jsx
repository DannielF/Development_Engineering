import React from 'react';
import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const Login = () => (
  <section className='login'>
    <section className='login__container'>
      <h2>Inicia sesión</h2>
      <form className='login__container--form'>
        <input
          aria-label='correo'
          className='input'
          type='text'
          placeholder='Correo'
        />
        <input
          aria-label='contraseña'
          className='input'
          type='password'
          placeholder='Contraseña'
        />
        <button type='button' className='button'>Iniciar sesión</button>
        <div className='login__container--remember'>
          <label htmlFor='cbox1'>
            <input type='checkbox' name='' id='cbox1' value='checkbox' />
            Recuérdame
          </label>
          <a href='/'>Olvidé mi contraseña</a>
        </div>
      </form>
      <section className='login__container--social-media'>
        <div>
          <img
            src={googleIcon}
            alt='logo google'
          />
          <p>Inicia sesion con Google</p>
        </div>
        <div>
          <img src={twitterIcon} alt='logo Twitter' />
          <p>Inicia sesion con Twitter</p>
        </div>
      </section>
      <p className='login__container--register'>
        No tienes ninguna cuenta
        <a href='/register.html'> Regístrate </a>
      </p>
    </section>
  </section>
);

export default Login;
