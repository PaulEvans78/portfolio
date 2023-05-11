import React, { useRef } from 'react';
import ReactPlayer from 'react-player';



const VIDEO_PATH = 'https://youtu.be/0BIaDVnYp2A';
function PlayerComponent() {
   const playerRef = useRef(null);
   return (
      <div>
         <ReactPlayer ref={playerRef} url={'../assets/SpotifyPrototype.mov'} controls={true} />
      </div>
   )
};
export default PlayerComponent;