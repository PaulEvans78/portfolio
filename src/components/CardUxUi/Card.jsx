import React from 'react';
import { CardContainer, StyledCardImg, StyledInfoContainer ,StyledCardp, StyledButton, Styledh5 } from './styles';






function Card (props) {

    return (
        
    
        <CardContainer>
            <StyledCardImg src={props.mainPic} alt="category Background" />
        
            <StyledInfoContainer> 
                    <Styledh5>{props.headline}</Styledh5>
                        <StyledCardp>{props.githubdescription ? props.githubdescription : props.description}</StyledCardp>
                            <a href={props.url ? props.url : props.buttonLink}><StyledButton>{props.buttonText}</StyledButton></a>
            </StyledInfoContainer> 
            
        </CardContainer>

    

    
    

     
   
    )
}

export default Card;