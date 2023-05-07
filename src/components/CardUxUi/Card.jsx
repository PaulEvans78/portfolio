import React from 'react';
import { CardContainer, StyledCardImg, StyledInfoContainer ,StyledCardp, StyledButton, Styledh2 } from './styles';

// import designPic from '../../../assets/ux.png'
// import filmPic from '../../../assets/vikings.png'





function Card (props) {

    return (
        
    
        <CardContainer>
            <StyledCardImg src={props.mainPic} alt="category Background" />
            {/* <StyledReactImg src={props.middlePic} alt="React Logo" /> */}
        
            <StyledInfoContainer> 
            <Styledh2>{props.headline}</Styledh2>
         <StyledCardp>{props.githubdescription ? props.githubdescription : props.description}</StyledCardp>
            <a href={props.url ? props.url : props.buttonLink}><StyledButton>{props.buttonText}</StyledButton></a>
            </StyledInfoContainer> 
        </CardContainer>

    

    
    

     
   
    )
}

export default Card;