import React from 'react';
import { CardContainer, StyledCardImg, } from './styles';



function Card (props) {

    return (
        
    
        <CardContainer>
            <StyledCardImg src={props.mainPic} alt="Spotify" />
        </CardContainer>

    

    
    

     
   
    )
}

export default Card;