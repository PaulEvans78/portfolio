import React from 'react';
import styled from "styled-components";
import me from '../assets/me_photo.png';
import tuktuk from '../assets/tuktuk.jpg';
import ToolBox from '../components/ToolBox';
// import { Styledh2 } from '../components/CardLandingPage/CardLandingPage';



//GRID CONTAINER
const StyledAboutGridContainer = styled.div`
grid-area: main;
display: grid;
grid-template-rows: auto;
grid-template-columns: repeat(2, 1fr);
grid-template-areas:
"photo intro"
"textOne textOne"
"photoOne photoOne"
"textTwo textTwo"
"photoTwo photoTwo"
"textThree textThree"
"toolBox toolBox";
width: 100vw;

@media screen and (max-width: 767px) {
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    grid-template-areas:
    "photo"
    "intro"
    "textOne"
    "photoOne"
    "textTwo"
    "photoTwo"
    "textThree"
    "toolBox";
}
`;



//IMAGE ME
const StyledMyImgContainer = styled.div`
grid-area: photo;
display: flex;
/* padding: 1em; */
flex-direction: row;
justify-content: center;
/* align-self: center; */
align-items: center;
font-family: 'Roboto', sans-serif;
font-size: 1.5rem;
font-weight: bold;
color: whitesmoke;

@media screen and (max-width: 767px) {
    /* justify-content: flex-start; */
    margin-bottom: 2em;
    }
`;


const StyledMyImg = styled.img`
/* grid-area: photo; */
width: 50%;
margin: 3em 2em 0em 0em;
box-shadow: 8px 8px 4px #414141;
border-radius: 8px;

@media screen and (max-width: 767px) {
    width: 40%;
    margin: 3em 0em 0em 0em;

  }
`;


// INTRO TEXT
const Styledintro = styled.p`
    grid-area: intro;
    display: flex;
    align-self: center;
    text-align: center;
    margin-bottom: 0.25em;
    white-space: pre-wrap;
    background-color: whitesmoke;
    font-family: 'Poppins';
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 1px;
    margin-right: 4em;
    padding: 1em;
    border-radius: 10px;

    @media screen and (max-width: 767px) {
    flex-direction: column;
    justify-self: center;
    justify-content: center;
    margin-bottom: 3em;
    margin-right: 0em;
    font-size: 20px;
    width: 80vw;
    /* justify-items: center; */
  }
`;




//TEXT ONE

const StyledTextOneContainer = styled.div`
    grid-area: textOne;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100vw;
    /* align-items: flex-start; */
    margin-bottom: 3em;

    @media screen and (max-width: 960px) {
        margin-bottom: 3em;
  }
    
    @media screen and (max-width: 767px) {
      /* padding-left:0.5em; */
        /* justify-content: center; */
  }
`;

const Styledh2 = styled.h2`
    grid-area: textOne;
    display: flex;
    align-self: flex-start;
    text-align: left;
    margin-bottom: 0.25em;
    white-space: pre-wrap;
    font-family: 'Poppins';
    /* font-style: normal; */
    font-weight: 900;
    font-size: 48px;
    line-height: 72px;
    color: white;
    margin-top: 2em;
    margin-left: 2em;

    @media screen and (max-width: 960px) {
        margin-top: 1em;
  }
    
    @media screen and (max-width: 767px) {
        justify-content: flex-start;
        align-self: flex-start;
        margin-top: 1em;
        margin-left: 0.2em;
        margin-bottom: 1em;
  }
`;


const StyledTextOne = styled.p`
    /* grid-area: textOne; */
    display: flex;
    align-self: center;
    /* text-align: center; */
    margin-bottom: 0.25em;
    white-space: pre-wrap;
    color: whitesmoke;
    font-family: 'Poppins';
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 1px;
    margin-left: 4em;
    margin-right: 2em;
    padding: 1em;

    @media screen and (max-width: 767px) {
        justify-self: flex-start;
        /* text-align: left; */
        width: 90vw;
        margin-right: 1em;
        margin-left: 0em;
        margin-top: 0em;
        padding: 0em;
}
`;

// TOOL BOX

const StyledPhotoOneContainer = styled.div`
grid-area: photoOne;
display: flex;
flex-direction: column;
justify-content: center;
/* justify-self: center; */
width: 100vw;
/* height: 460px; */
overflow: hidden;
margin-top: 1em;
margin-bottom: 3em;

@media screen and (max-width: 960px) {
    height: 360px;
  }
    
@media screen and (max-width: 767px) {
    justify-content: flex-start;
    margin-bottom: 4em;
    /* padding-left: 1em; */
  }
`;

const Styledh3 = styled.h3`
    grid-area: photoOne;
    display: flex;
    align-self: center;
    text-align: center;
    margin-bottom: 0.25em;
    white-space: pre-wrap;
    font-family: 'Poppins';
    /* font-style: normal; */
    font-weight: 900;
    font-size: 38px;
    line-height: 72px;
    color: white;
    margin-top: 2em;
    margin-bottom: 1.5em;
    
    /* margin-left: 2em; */

    @media screen and (max-width: 960px) {
        /* margin-top: 1em; */
  }
    
    @media screen and (max-width: 767px) {
        margin-right: 1em;
        /* align-self: flex-start;
        margin-top: 1em;
        margin-left: 0.5em;
        margin-bottom: 1em; */
  }
`;

// const StyledPhotoOne = styled.img`
// width: 85vw;
// object-fit: cover;

// @media screen and (max-width: 960px) {
//     width: 80vw;
//   }
    
//     @media screen and (max-width: 767px) {
//         width: 100vw;
//   }

// `;

// TEXT TWO

const StyledTextTwoContainer = styled.div`
    grid-area: textTwo;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100vw;
    margin-bottom: 3em;
    /* align-items: flex-start; */

    @media screen and (max-width: 767px) {
        /* padding-left:0.5em; */

}
`;

const StyledTextTwo = styled.p`
    display: flex;
    align-self: center;
    /* margin-bottom: 0.25em; */
    white-space: pre-wrap;
    color: whitesmoke;
    font-family: 'Poppins';
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 1px;
    margin-left: 4em;
    margin-right: 2em;
    padding: 1em;

    @media screen and (max-width: 767px) {
      justify-content: flex-start;
      width: 90vw;
        margin-left: 0em;
        margin-right: 1em;
        padding: 0em;
  }
`;


const StyledPhotoTwoContainer = styled.div`
grid-area: photoTwo;
display: flex;
justify-content: center;
width: 100vw;
height: 560px;
overflow: hidden;
/* margin-bottom: 3em; */
/* margin-right: 2em; */

@media screen and (max-width: 960px) {
  width: 100vw;
  height: auto;
  }

@media screen and (max-width: 767px) {
    justify-content: center;
    padding-left: 0em;
  }

`;

const StyledPhotoTwo = styled.img`
width: 85vw;
object-fit: cover;

@media screen and (max-width: 960px) {
    width: 80vw;
  }
    
    @media screen and (max-width: 767px) {
        /* height: 260px;
        width: 90vw; */
        width: 100vw;
  }

`;





function About() {

    return (
        <StyledAboutGridContainer>
        
        <StyledMyImgContainer>
          <StyledMyImg src={me} alt="Paul Evans"/>
        </StyledMyImgContainer>

    
            <Styledintro>“Hi! I’m Paul. 
                        Nice to see you here.  My professional background spans 
over 15 years, during which I worked as a cinematographer in the film and television industry. In 2021, I decided
to study UX / UI and frontend design. Combining my extensive experience as a photographer with web design has so far been a thrilling adventure.
            </Styledintro>
            
            <StyledTextOneContainer>

                <Styledh2>About me.</Styledh2>
            
                <StyledTextOne>As a freelancer and business owner, I have honed 
my skills in client communication, team leadership, and managing multiple projects under tight deadlines. Originally 
from the UK, I moved to Sweden in 2001 and I am fluent in both English and Swedish.  
                </StyledTextOne>

            </StyledTextOneContainer>

            <StyledPhotoOneContainer>
            <Styledh3>My Tool Box</Styledh3>
            <ToolBox />
            </StyledPhotoOneContainer>

            <StyledTextTwoContainer>
            
                <StyledTextTwo>I am very much a morning person, “ not one of them I hear you say”. I am active, creative, and love to travel and surf.
                  I have a calm and methodical approach to life, which enables me to navigate challenges with ease. 
                </StyledTextTwo>

            </StyledTextTwoContainer>

            <StyledPhotoTwoContainer>
                <StyledPhotoTwo src={tuktuk} alt="tuk tuk"/>
            </StyledPhotoTwoContainer>

  

        </StyledAboutGridContainer>
        
    );
}

export default About;