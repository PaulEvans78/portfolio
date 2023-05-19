import React from 'react';
import { StyledFrontCard, StyledFrontCardImg, StyledInfoContainer, StyledCardp, StyledButton, Styledp, } from './styles';






function Card (props) {

    return (
        
    
        
            <StyledFrontCard>
                <StyledFrontCardImg src={props.mainPic} alt="Category Image"/>
            
                    

                        <StyledInfoContainer>
                            <Styledp>{props.headline}</Styledp>
                                <StyledCardp>{props.description}</StyledCardp>
                                    <a href={props.buttonLink}><StyledButton>{props.buttonText}</StyledButton></a>
                        </StyledInfoContainer>

            </StyledFrontCard>
   
    )
}

export default Card;



