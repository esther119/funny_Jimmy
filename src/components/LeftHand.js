import React, { useRef } from 'react';
import audioFile from '../sound/guess_how_much.mp3'
import leftHandImage from '../images/lefthand.svg';

const LeftHand = () => {
  const handleClick = () => {
    const sound = new Audio(audioFile);
    sound.play();
  };

  return (
    <div>         
        <img src={leftHandImage}
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
        />
    </div>
  );
};

export default LeftHand;
