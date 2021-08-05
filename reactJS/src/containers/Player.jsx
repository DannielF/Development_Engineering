/* eslint-disable arrow-parens */
import React from 'react';
import '../assets/styles/components/Player.scss';

const Player = props => {
  // this part is giving for Router when the route is generate (player/:id), then match with the parameters
  const { id } = props.match.params;
  return (
    <div className='Player'>
      <video controls autoPlay>
        <source src='' type='video/mp4' />
      </video>
      <div className='player-back'>
        <button type='button' onClick={() => props.history.goBack()}>Get Back</button>
      </div>
    </div>
  );
};

export default Player;
