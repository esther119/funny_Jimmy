import React, { useRef } from 'react';
import audio_file from '../sound/guess_how_much.mp3'

const Head = (props) => {
    const svgRef = useRef(null);

  const handleClick = () => {
    const sound = new Audio(audio_file);
    sound.play();
  };

  return (
    <div className="flex justify-center items-center h-screen">
        <img onClick={handleClick} alt='whatever' src={props.image}/>
    </div>
  );
};

export default Head;
