// import React from 'react';
// import backCard from '../../assets/backCard.png';
// import designPic from '../../assets/ux.png'
import styled from "styled-components";



//CARD
export const StyledCard = styled.div`
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
    perspective: 100em; 
    

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

export const StyledFrontCard = styled.div`
   
    position: absolute; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2em;
    width: 100%;
    height: 100%;
    /* padding: 0em 0.5em 0em 0.5em; */
    background-color: whitesmoke;
    border-radius: 10px;
    font-family: 'Poppins';
    font-size: 1.2rem;
    overflow: hidden;   
    backface-visibility: hidden; 
    transform: rotateY(0deg);
`;

   
export const StyledFrontCardImg = styled.img`
    width: 95%;
    height: 95%;
    object-fit: cover;
    align-self: center;
    margin-top: 0.5em;
    /* margin: 0.5em; */
    box-shadow: 4px 6px 5px #858287;
    border-radius: 10px;
    /* z-index:0; */
 `;

export const StyledInfoContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* justify-self: flex-end; */
    width: 85%;
    background-color: #17171792;
    /* padding-top: 1em; */
    border-radius: 10px;
    bottom: 1.5em;
`;

export const Styledh2 = styled.h2`
    text-align: center;
    /* align-self: center; */
    margin-top: 1em;
    margin-bottom: 0.25em;
    white-space: pre-wrap;
    font-size: 28px;
    font-weight: 900;
    color: white;
    position: absolute;
    /* z-index: 100; */
`;

export const StyledCardp = styled.p`
    color: #ffffff;
    font-size: 14px;
    margin-top: 2em;
    padding: 0em 1.5em 1.5em;
    text-align: center;
`;

export const StyledButton = styled.button`
    /* width: 80%; */
    background-color: #ffffff;
    /* background: linear-gradient(180deg, #ccae3f, #dec052); */
    color: #181818;
    padding: 0.75em 1.5em;
    margin: 0em 2em 1em 2em;
    border-radius: 10px;
    font-size: 1rem;
    &:hover{
    background: #ccae3f;
    }
    /* font-weight: bold; */
    /* border: 2px double whitesmoke; */
    /* box-shadow: 0px 6px 5px #b1b1b19a; */
`;




// BACK CARD
export const StyledBackCard = styled.div`
   
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

export const StyledBackCardImg = styled.img`
     width: 90%;
     height: 90%;
     object-fit: cover;
     align-self: center; 
     border-radius: 10px;
     margin-top: 1em;
     box-shadow: 4px 6px 5px #858287;
 `;