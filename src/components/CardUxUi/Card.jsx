import React from 'react';
import { CardContainer, StyledCardImg, StyledCardp, StyledButton, Styledh2 } from './styles';







function Card (props) {

    return (
        
    
        <CardContainer>
            <StyledCardImg src={props.mainPic} alt="category Background" />
            {/* <StyledReactImg src={props.middlePic} alt="React Logo" /> */}
        
            <Styledh2>{props.headline}</Styledh2>
         <StyledCardp>{props.description}</StyledCardp>
            <StyledButton>{props.buttonText}</StyledButton>
        
        </CardContainer>

    

    
    

     
   
    )
}

export default Card;