import React, { useRef } from 'react';
import audio_file from '../sound/guess_how_much.mp3'

const Head = (props) => {
  const handleClick = () => {
    const sound = new Audio(audio_file);
    sound.play();
  };

  return (
    <div>         
        <img src={props.image} 
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
        />
    </div>
  );
};

export default Head;
