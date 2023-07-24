import React, { useRef } from 'react';
import audioFile from '../sound/guess_how_much.mp3'
import bodyImage from '../images/body.svg'

const Body = () => {
  const handleClick = () => {
    const sound = new Audio(audioFile);
    sound.play();
  };

  return (
    <div>         
        <img src={bodyImage}
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
        />
    </div>
  );
};

export default Body;
