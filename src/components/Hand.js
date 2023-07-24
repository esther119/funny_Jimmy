import React from 'react';

const Hand = (props) => {
    const handleClick = () => {
        const sound = new Audio(audioFile);
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
}

export default Hand