import React from 'react';
import styled from "styled-components";
import me from '../assets/me_photo.png';
import surf from '../assets/surf.png';
import ToolBox from '../components/ToolBox';


//GRID CONTAINER

const StyledAboutGridContainer = styled.div`
grid-area: main;
max-width: 100%;
display: flex;
flex-direction: column;
row-gap: 8em;

`;



//IMAGE ME

const StyledMyImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 3em;
  align-items: center;
  max-width: 100%;
  margin-top: 4em; 
  padding: 0em 2em 0em 0em;



@media screen and (max-width: 960px) {
    flex-direction: column;
    }
`; 


const StyledMyImg = styled.img`
  position: relative;
  align-self: flex-start;
  width: 40%;
  margin: 3em 0em 0em 0em;
  border-radius: 10px;
  border: 2px solid whitesmoke;
  animation-name: slideleft;
  animation-duration: 2s;
  animation-delay: 0s;

    @keyframes slideleft {
      0%   {left:-400px;}
      100% {left:0px;}
}

@media screen and (max-width: 960px) {
    margin-left: 2em;
  }
`;


// ABOUT ME

const StyledintroContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    text-align: center;
    white-space: pre-wrap;
    padding: 2em 2em 0em 2em;
    border-radius: 10px;
    animation-name: slideright;
    animation-duration: 2s;
    animation-delay: 0s;

    @keyframes slideright {
      0%   {right:-400px;}
      100% {right:0px;}
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
    text-align: left;
    white-space: pre-wrap;
    font-family: 'Poppins';
    font-weight: bold;
    font-size: 38px;
    letter-spacing: 1px;
    line-height: 72px;
    color: whitesmoke;

     @media screen and (max-width: 960px) {
        margin-top: 0em;
  }
`;



// SECOND CONTAINER

const StyledSecondContainer = styled.div`
    max-width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    column-gap: 3em;
    padding: 2em 2em 0em 0em;
    

     @media screen and (max-width: 960px) {
       flex-direction: column-reverse;
       align-items: flex-start;
  }
`;

const StyledPhotoTwo = styled.img`
  position: relative;
  width: 40%;
  border: 2px solid whitesmoke;
  border-radius: 10px;
  animation-name: slideright;
  animation-duration: 2s;
  animation-delay: 0s;

    @keyframes slideright {
      0%   {right:-400px;}
      100% {right:0px;}
}

   @media screen and (max-width: 960px) {
      width: 70%;
      margin-left: 2em;
    }
`;

const StyledSecondTextConatiner = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    text-align: center;
    max-width: 100%;
    white-space: pre-wrap;
    padding: 2em 2em 0em 2em;
    border-radius: 10px;
    animation-name: slideleft;
    animation-duration: 2s;
    animation-delay: 0s;

    @keyframes slideleft {
      0%   {left:-400px;}
      100% {left:0px;}
}
`;




// TOOL BOX

const StyledToolBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  margin-bottom: 4em;

  @media screen and (max-width: 960px) {
      height: 360px;
    }
      
  @media screen and (max-width: 767px) {
      justify-content: flex-start;
      margin-bottom: 4em;
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

                                      <StyledP>I have worked as a creative for over 15 years, during which time I have worked as a cinematographer in the film and television industry, 
                                        concept developer and script writer. Needing a platform to showcase my work I taught myself how to code frontend. In 2020, 
                                        I decided to study web design to gain structure and further insight into techniques and methods. 
                                        I have a calm and methodical approach to life, which enables me to navigate challenges with ease. 
                                        My strong willpower and determination help me stay focused on the goals, even during difficult times. 
                                      </StyledP>


                      </StyledintroContainer>

            </StyledMyImgContainer>

    
            
           
             
            <StyledSecondContainer>

                    <StyledSecondTextConatiner>

                          <Styledh3>For fun</Styledh3>

                            <StyledP>Surfing and traveling are my two biggest passions. When I'm not paddling out into the sea I like to work out at the gym or swim in the lake. 
                              I also cherish the time I spend with my family, cooking and watching movies and tv shows.
  
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