import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../assets/styles/components/Search.scss';

const Search = ({ isHome }) => {
  const inputStyle = classNames('input', {
    isHome,
  });
  return (
    <section className='main'>
      <h2 className='main__title'>¿What do you want to see today?</h2>
      <input className={inputStyle} type='text' placeholder='Search...' />
    </section>
  );
};

Search.propTypes = {
  isHome: PropTypes.bool,
};

export default Search;
