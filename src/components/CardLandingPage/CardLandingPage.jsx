import React from 'react';
import backCard from '../../assets/backCard.png';
import designPic from '../../assets/ux.png'
import styled from "styled-components";



//CARD
const StyledUxCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 3em;
    margin-bottom: 2em;
    margin-left: 0.5em;
    width: 290px;
    height: 490px;
    background-color: whitesmoke;
    border-radius: 10px;
    overflow: hidden;
    perspective: 100em;
    transform-style: preserve-3d;
    animation: spin 8s infinite linear;
    transform: rotateY(180deg);
    

@keyframes spin {
    0% {
        transform: rotateY(0deg)
    }

    50% {
        transform: rotateY(360deg)
    }

    100% {
        transform: rotateY(360deg);
    }
}
`;



//FRONT CARD

const StyledUxFrontCard = styled.div`
   
    position: absolute; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2em;
    width: 100%;
    height: 100%;
    background-color: whitesmoke;
    border-radius: 10px;
    font-family: 'Poppins';
    font-size: 1.2rem;
    overflow: hidden;   
    backface-visibility: hidden; 
    transform: rotateY(0deg);
`;

   
const StyledUxFrontCardImg = styled.img`
    width: 90%;
    height: 230px;
    object-fit: cover;
    align-self: center;
    margin-top: 0.5em;
    box-shadow: 4px 6px 5px #858287;
    border-radius: 10px;
 `;

export const Styledh2 = styled.h2`
    text-align: center;
    margin-bottom: 0.25em;
    white-space: pre-wrap;
    font-size: 28px;
    font-weight: 900;
`;

const StyledCardp = styled.p`
    color: black;
    font-size: 14px;
    padding: 0em 1.5em 1.5em;
    text-align: center;
`;

const StyledButton = styled.button`
    background-color: #403f3f;
    color: whitesmoke;
    padding: 0.75em 1.5em;
    margin-bottom: 2em;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: bold;
    border: 2px double whitesmoke;
    box-shadow: 0px 6px 5px #858287;
`;




//BACK CARD
const StyledBackCard = styled.div`
   
    position: absolute; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: whitesmoke;
    border-radius: 10px;
    overflow: hidden;
    backface-visibility: hidden;  
    transform: rotateY(180deg);
`;

const StyledBackCardImg = styled.img`
     width: 90%;
     height: 90%;
     object-fit: cover;
     align-self: center; 
     border-radius: 10px;
     margin-top: 1em;
     box-shadow: 4px 6px 5px #858287;
 `;




function CardLandingPage () {

    return (
        
    <StyledUxCard>
        
        <StyledUxFrontCard>
            <StyledUxFrontCardImg src={designPic} alt="UX Designer"/>
            <Styledh2>UX / UI & Frontend Design</Styledh2>
            <StyledCardp>See my portfolio.</StyledCardp>
            <StyledButton>View More</StyledButton>
        </StyledUxFrontCard>

        <StyledBackCard>
            <StyledBackCardImg src={backCard} alt="Paul Evans"/>
        </StyledBackCard> 

    </StyledUxCard>
   
    )
}

export default CardLandingPage;