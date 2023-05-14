import React from 'react';
// import dude from '../assets/dude.png';
import styled from "styled-components";
import Skills from '../components/CardLandingPage/skills';
// import backCard from '../assets/backCard.png';
// import FlippableCard from '../components/FlippableCard/FlippableCard';




// FLIPPING CARD CONTAINER

// const StyledFlippingCard = styled.div`
// position: relative;
// `;


// CARD BACK

// const StyledBackCard = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
//   margin-top: 3em;
//   margin-bottom: 2em;
//   margin-left: 0.5em;
//   padding-top: 15px;
//   width: 290px;
//   height: 490px;
//   background-color: whitesmoke;
//   border-radius: 10px;
//   overflow: hidden;
//   position: relative;
//   transform: rotateY(180deg);
//   backface-visibility: hidden;
//   bottom: 100%;
// `;

// const StyledBackCardImg = styled.img`
// width: 90%;
// height: 475px;
// object-fit: cover;
// align-self: center; 
// border-radius: 10px;
// `;

const StyledHomeContainer = styled.div`
  max-width: 100vw; 
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-left: 1em;
  margin-right: 1em;

`;

const StyledHomep = styled.p`
  position: relative;
  width: 40%;
  align-self: flex-end;
  font-family: 'Poppins';
  color: whitesmoke;
  font-size: 20px;
  /* font-weight: 600;
  line-height: 120px;
  flex-shrink: 2; */
  margin-bottom: 2em;
  margin-right: 0.5em;
  margin-left: 0.2em;
  animation-name: slidein;
  animation-duration: 2s;
  animation-delay: 0s;

    @keyframes slidein {
      0%   {left:-400px;}
      100% {left:0px;}
}
`;

// const Styledh1 = styled.h1`
//   font-family: 'Poppins';
//   color: whitesmoke;
//   font-size: 8rem;
//   font-weight: 600;
//   line-height: 120px;
//   flex-shrink: 2;
//   margin-bottom: 0.25em;
//   margin-right: 0.5em;
//   margin-left: 0.2em;

// @media screen and (max-width: 1115px) {
//   font-size: 6rem;
//   }

//   @media screen and (max-width: 1006px) {
//   font-size: 4rem;
//   }

// @media screen and (max-width: 960px) {
//   display: none;
//   }
    
// `;





const Home = () => {

  return (
    
     <StyledHomeContainer>
     <StyledHomep>Hi, my name is Paul Evans.
                    I am a passionate creative who's professional background spans over 15 years, during which time I have worn many hats. 
                    UX designer, frontend developer, cinematographer and photographer not to mention concept developer and script writer. 
                    Combining my extensive experience with film and web design has been a thrilling adventure which continues to inspire and surprise me.
    </StyledHomep>
    
     {/* <FlippableCard /> */}
     <Skills />
    
   
   

   </StyledHomeContainer>
  
  );
}


export default Home;