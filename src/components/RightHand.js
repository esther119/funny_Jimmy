import React, { useRef } from 'react';
import audioFile from '../sound/guess_how_much.mp3'
import rightHandImage from '../images/righthand.svg';

const RightHand = () => {
  const handleClick = () => {
    const sound = new Audio(audioFile);
    sound.play();
  };

  return (
    <div>         
        <img src={rightHandImage}
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
        />
    </div>
  );
};

export default RightHand;
