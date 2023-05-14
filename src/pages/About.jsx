import React from 'react';
import styled from "styled-components";
import me from '../assets/me_photo.png';
import surf from '../assets/surf.png';
import ToolBox from '../components/ToolBox';
// import { Styledh2 } from '../components/CardLandingPage/CardLandingPage';



//GRID CONTAINER

const StyledAboutGridContainer = styled.div`
grid-area: main;
max-width: 100%;
/* display: grid;
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
max-width: 100%;

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
} */
`;



//IMAGE ME

const StyledMyImgContainer = styled.div`
/* grid-area: photo; */
display: flex;
/* padding: 1em; */
flex-direction: row;
/* justify-content: space-evenly; */
/* align-self: center; */
align-items: center;
max-width: 100%;
margin: 3em 0em 3em 0em; 
padding: 0em 2em 0em 2em;


@media screen and (max-width: 767px) {
    /* justify-content: flex-start; */
    margin-bottom: 2em;
    }
`;


const StyledMyImg = styled.img`
/* grid-area: photo; */
width: 30%;
margin: 3em 2em 0em 0em;
/* box-shadow: 8px 8px 4px #414141; */
border-radius: 10px;
border: 2px solid whitesmoke;

@media screen and (max-width: 767px) {
    width: 40%;
    margin: 3em 0em 0em 0em;

  }
`;


// ABOUT ME

const StyledintroContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    text-align: center;
    margin: 0em 0em 0em 0em;
    white-space: pre-wrap;
    /* margin-right: 4em; */
    padding: 2em 2em 0em 2em;
    border-radius: 10px;

    @media screen and (max-width: 767px) {
    flex-direction: column;
    /* justify-self: flex-start; */
    justify-content: flex-start;
    align-content: flex-end;
    margin-bottom: 3em;
    margin-right: 0em;
    font-size: 20px;
    width: 80vw;
    /* justify-items: center; */
  }
`;

const StyledP = styled.p`
    text-align: left;
    font-family: 'Poppins';
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 2px;
    color: whitesmoke;
`;

const Styledh3 = styled.h3`
    /* display: flex;*/
    text-align: left;
    margin: 0em 0em 0em 0em;
    white-space: pre-wrap;
    font-family: 'Poppins';
    font-weight: bold;
    font-size: 38px;
    line-height: 72px;
    color: whitesmoke;

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



// SECOND CONTAINER

const StyledSecondContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    max-width: 100%;
    /* align-items: flex-start; */
    margin: 6em 0em 14em 0em;
    padding: 2em 2em 0em 2em;

    @media screen and (max-width: 960px) {
        margin-bottom: 3em;
  }
    
    @media screen and (max-width: 767px) {
      /* padding-left:0.5em; */
        /* justify-content: center; */
  }
`;

const StyledPhotoTwo = styled.img`
  width: 40%;
  margin: 0em 0em 0em 3em;
  border: 2px solid whitesmoke;
  border-radius: 10px;

  @media screen and (max-width: 960px) {
      width: 80vw;
    }
      
      @media screen and (max-width: 767px) {
          /* height: 260px;
          width: 90vw; */
          width: 100vw;
    }

`;

const StyledSecondTextConatiner = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    text-align: center;
    max-width: 100%;
    margin: 0em 0em 0em 0em;
    white-space: pre-wrap;
    /* margin-right: 4em; */
    padding: 2em 2em 0em 2em;
    border-radius: 10px;
`;




// TOOL BOX

const StyledToolBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  /* justify-items: center; */
  max-width: 100%;
  /* height: 460px; */
  /* overflow: hidden; */
  margin: 6em 0em 3em 0em;

  @media screen and (max-width: 960px) {
      height: 360px;
    }
      
  @media screen and (max-width: 767px) {
      justify-content: flex-start;
      margin-bottom: 4em;
      /* padding-left: 1em; */
  }
`;





function About() {

    return (
        <StyledAboutGridContainer>
        
            <StyledMyImgContainer>

               <StyledMyImg src={me} alt="Paul Evans"/>

                      <StyledintroContainer>

                            <Styledh3>About me</Styledh3>
                              
                            <StyledP>“Hi, I’m Paul! </StyledP>

                                      <StyledP>Nice to see you here.  My professional background spans over 15 years, 
                                      during which I worked as a cinematographer in the film and television industry. 
                                      In 2021, I decided to study UX / UI and frontend design. Combining my extensive experience 
                                      as a photographer with web design has so far been a thrilling adventure.</StyledP>


                      </StyledintroContainer>

            </StyledMyImgContainer>

    
            
           
             
            <StyledSecondContainer>

                    <StyledSecondTextConatiner>

                          <Styledh3>For fun</Styledh3>

                            <StyledP>As a freelancer and business owner, I have honed my skills in client communication, 
                              team leadership, and managing multiple projects under tight deadlines. Originally from the UK, 
                              I moved to Sweden in 2001 and I am fluent in both English and Swedish.  
                            </StyledP>

                    </StyledSecondTextConatiner>

                        <StyledPhotoTwo src={surf} alt="Surfing"/>

                    

            </StyledSecondContainer>



            <StyledToolBoxContainer>

                  <Styledh3>My Tool Box</Styledh3>

                    <ToolBox />

            </StyledToolBoxContainer>

          

            

  

        </StyledAboutGridContainer>
        
    );
}

export default About;