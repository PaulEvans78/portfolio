import React from 'react';
import { CardContainer, StyledCardImg, StyledInfoContainer ,StyledCardp, Styledh2 } from './styles';




function Card (props) {

    return (
        
    
        <CardContainer>
            <StyledCardImg src={props.mainPic} alt="Background" />
        
            <StyledInfoContainer> 
                <Styledh2>{props.headline}</Styledh2>
                <StyledCardp>{props.description}</StyledCardp>
            </StyledInfoContainer> 
        </CardContainer>


   
    )
}

export default Card;