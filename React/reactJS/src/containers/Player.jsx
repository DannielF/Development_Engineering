/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-parens */
import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';
import NotFound from './NotFound';
import '../assets/styles/components/Player.scss';
// import { Redirect } from 'react-router-dom';

const Player = props => {
  // this part is giving for Router when the route is generate (player/:id), then match with the parameters
  const { id } = props.match.params;
  const hasPlaying = Object.keys(props.playing).length > 0;

  useLayoutEffect(() => {
    props.getVideoSource(id);
  }, []);
  return !hasPlaying ? <NotFound /> : (
    <div className='Player'>
      <video controls autoPlay>
        <source src={props.playing.source} type='video/mp4' />
      </video>
      <div className='player-back'>
        <button type='button' onClick={() => props.history.goBack()}>Get Back</button>
      </div>
    </div>
  ); /* <Redirect to='/404/' /> */
};

const mapStateToProps = state => {
  return {
    playing: state.playing,
  };
};
const mapDispatchToProps = {
  getVideoSource,
};

Player.propTypes = {
  getVideoSource: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
