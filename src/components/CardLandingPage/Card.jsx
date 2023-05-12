import React from 'react';
import { StyledCard, StyledFrontCard, StyledFrontCardImg, StyledInfoContainer, StyledCardp, StyledButton, Styledh5, } from './styles';

// import designPic from '../../../assets/ux.png'
// import filmPic from '../../../assets/vikings.png'





function Card (props) {

    return (
        
    
        <StyledCard>
            <StyledFrontCard>
                <StyledFrontCardImg src={props.mainPic} alt="Category Image"/>
            
                    {/* <Styledh2>{props.headline}</Styledh2> */}

                        <StyledInfoContainer>
                            <Styledh5>{props.headline}</Styledh5>
                            <StyledCardp>{props.description}</StyledCardp>
                            <a href={props.buttonLink}><StyledButton>{props.buttonText}</StyledButton></a>
                        </StyledInfoContainer>

            </StyledFrontCard>

            

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