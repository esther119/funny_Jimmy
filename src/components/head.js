import React, { useRef } from 'react';
import audio_file from '../sound/guess_how_much.mp3'

const Head = () => {
  const svgRef = useRef(null);

  const handleClick = () => {
    const sound = new Audio(audio_file);
    sound.play();
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <svg
        ref={svgRef}
        onClick={handleClick}
        className="cursor-pointer w-40 h-40 p-2 bg-gray-300 rounded-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Replace 'myImage.svg' with the path to your SVG image */}
        <image href="public/logo192.png" width="40" height="40" />
      </svg>
    </div>
  );
};

export default Head;
