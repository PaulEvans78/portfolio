import React from 'react';
import { CardContainer, StyledCardImg, } from './styles';

// import designPic from '../../../assets/ux.png'
// import filmPic from '../../../assets/vikings.png'





function Card (props) {

    return (
        
    
        <CardContainer>
            <StyledCardImg src={props.mainPic} alt="Spotify" />
        
            {/* <StyledInfoContainer> 
                <Styledh2>{props.headline}</Styledh2>
                <StyledCardp>{props.description}</StyledCardp>
            </StyledInfoContainer>  */}
        </CardContainer>

    

    
    

     
   
    )
}

export default Card;