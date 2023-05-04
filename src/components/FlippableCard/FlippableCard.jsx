import React from 'react';
import styled from "styled-components";
import CardLandingPage from '../CardLandingPage/CardLandingPage';

// FLIPPING CARD CONTAINER

const StyledFlippingCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: flex-start;
    align-items: center;
    /* margin-top: 3em;
    margin-bottom: 2em;
    margin-left: 0.5em;
    padding-top: 15px; */
    width: 290px;
    height: 590px;
    /* background-color: whitesmoke;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    animation: spin 8s infinite linear;*/
    transform-style: preserve-3d;
    perspective: 100em; 

  

/* @keyframes spin {
    0% {
        transform: rotateY(0deg)
    }

    50% {
        transform: rotateY(360deg)
    }

    100% {
        transform: rotateY(360deg);
    }
} */
`;

// FRONT CARD

// const StyledFrontCard = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     align-items: center;
//     margin-top: 3em;
//     margin-bottom: 2em;
//     margin-left: 0.5em;
//     padding-top: 15px;
//     width: 290px;
//     height: 490px;
//     background-color: whitesmoke;
//     border-radius: 10px;
//     overflow: hidden;
//     position: absolute;
// `;

// const StyledCardImg = styled.img`
//     width: 90%;
//     height: 230px;
//     object-fit: cover;
//     align-self: center;
//     margin-top: 0.5em;
//     box-shadow: 4px 6px 5px #858287;
//     border-radius: 10px;
// `;

// const Styledh2 = styled.h2`
//     text-align: center;
//     margin-bottom: 0.25em;
//     white-space: pre-wrap;
//     font-size: 28px;
//     font-weight: 900;
// `;

// const StyledCardp = styled.p`
// color: black;
// font-size: 14px;
// padding: 0em 1.5em 1.5em;
// text-align: center;
/* white-space: pre-wrap; */
// `;

// const StyledButton = styled.button`
//     background-color: #403f3f;
//     color: whitesmoke;
//     padding: 0.75em 1.5em;
//     margin-bottom: 2em;
//     border-radius: 10px;
//     font-size: 1rem;
//     font-weight: bold;
//     border: 2px double whitesmoke;
//     box-shadow: 0px 6px 5px #858287;

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
//   position: absolute;
//   transform: rotateY(180deg);
//   backface-visibility: hidden;
//   bottom: 100%;
// `;

// const StyledBackCardImg = styled.img`
//     width: 90%;
//     height: 475px;
//     object-fit: cover;
//     align-self: center; 
//     border-radius: 10px;
//     box-shadow: 4px 6px 5px #858287;
// `;

function FlippableCard () {

    return (
        
    <StyledFlippingCard>
        
        <CardLandingPage />
        {/* <StyledFrontCard>
            <Skills />
        </StyledFrontCard>

        <StyledBackCard>
            <StyledBackCardImg src={backCard} alt="Paul Evans"/>
        </StyledBackCard> */}

    </StyledFlippingCard>
    

     
   
    )
}

export default FlippableCard;