import React, { useRef } from 'react';
import audio_file from '../sound/guess_how_much.mp3'
import headimage from '../images/head.svg';

const Head = () => {
  const handleClick = () => {
    const sound = new Audio(audio_file);
    sound.play();
  };

  return (
    <div>         
        <img src={headimage}
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
        />
    </div>
  );
};

export default Head;
