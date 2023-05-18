import React from 'react';
import styled from "styled-components";
import Skills from '../components/CardLandingPage/skills';



const StyledHomeContainer = styled.div`
  grid-area: main;
  max-width: 100vw; 
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  column-gap: 1em;

  @media screen and (max-width: 960px) {
    flex-wrap: wrap;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    column-gap: 0em;
    align-items: center;
    padding: 0em 2em 0em 2em;
  }
`;


const StyledHomep = styled.p`
  position: relative;
  width: 40%;
  align-self: flex-end;
  font-family: 'Poppins';
  color: whitesmoke;
  font-size: 20px;
  margin-bottom: 2em;
  animation-name: slidein;
  animation-duration: 2s;
  animation-delay: 0s;

    @keyframes slidein {
      0%   {left:-400px;}
      100% {left:0px;}
}

@media screen and (max-width: 960px) {
  width: 100%;
  align-self: center;
  }
`;



const Home = () => {

  return (
    
     <StyledHomeContainer>

                <StyledHomep>
                         Hi, my name is Paul Evans.
                         I am a passionate creative who's professional background spans over 15 years, during which time I have worn many hats. 
                         UX designer, frontend developer, cinematographer and photographer not to mention concept developer and script writer. 
                         Combining my extensive experience with film and web design has been a thrilling adventure which continues to inspire and surprise me.
                </StyledHomep>
    
                    <Skills />

    </StyledHomeContainer>
  
  );
}


export default Home;