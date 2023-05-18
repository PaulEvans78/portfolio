import React from 'react';
import { StyledFrontCard, StyledFrontCardImg, StyledInfoContainer, StyledCardp, StyledButton, Styledh5, } from './styles';






function Card (props) {

    return (
        
    
        
            <StyledFrontCard>
                <StyledFrontCardImg src={props.mainPic} alt="Category Image"/>
            
                    

                        <StyledInfoContainer>
                            <Styledh5>{props.headline}</Styledh5>
                                <StyledCardp>{props.description}</StyledCardp>
                                    <a href={props.buttonLink}><StyledButton>{props.buttonText}</StyledButton></a>
                        </StyledInfoContainer>

            </StyledFrontCard>
   
    )
}

export default Card;



