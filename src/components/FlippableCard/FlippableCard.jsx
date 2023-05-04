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
    width: 290px;
    height: 590px;
    transform-style: preserve-3d;
    perspective: 100em; 
`;


function FlippableCard () {

    return (
        
    <StyledFlippingCard>
        
        <CardLandingPage />
        
    </StyledFlippingCard>
    
    )
}

export default FlippableCard;