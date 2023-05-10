import React from 'react';
import { CardContainer, StyledCardImg, StyledInfoContainer ,StyledCardp, Styledh2 } from './styles';

// import designPic from '../../../assets/ux.png'
// import filmPic from '../../../assets/vikings.png'





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