import React from 'react';
import { StyledCard, StyledFrontCard, StyledFrontCardImg, StyledInfoContainer, StyledCardp, StyledButton, Styledh3, StyledBackCard, StyledBackCardImg } from './styles';

// import designPic from '../../../assets/ux.png'
// import filmPic from '../../../assets/vikings.png'





function Card (props) {

    return (
        
    
        <StyledCard>
            <StyledFrontCard>
                <StyledFrontCardImg src={props.mainPic} alt="Category Image"/>
            
                    {/* <Styledh2>{props.headline}</Styledh2> */}

                        <StyledInfoContainer>
                            <Styledh3>{props.headline}</Styledh3>
                            <StyledCardp>{props.description}</StyledCardp>
                            <StyledButton>{props.buttonText}</StyledButton>
                        </StyledInfoContainer>

            </StyledFrontCard>

            <StyledBackCard>
                <StyledBackCardImg src={props.backCard} alt="Paul Evans"/>
            </StyledBackCard> 

        </StyledCard>

    

    
    

     
   
    )
}

export default Card;



// function CardLandingPage () {

//     return (
        
//     <StyledUxCard>
        
//         <StyledUxFrontCard>
//             <StyledUxFrontCardImg src={designPic} alt="UX Designer"/>
//             <Styledh2>UX / UI & Frontend Design</Styledh2>
//                 <StyledInfoContainer>
                    
//                     <StyledCardp>See my portfolio.</StyledCardp>
//                     <StyledButton>View More</StyledButton>
//                 </StyledInfoContainer>
//         </StyledUxFrontCard>

//         <StyledBackCard>
//             <StyledBackCardImg src={backCard} alt="Paul Evans"/>
//         </StyledBackCard> 

       
//     </StyledUxCard>
   
//     )
// }

// export default CardLandingPage;